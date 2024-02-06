import React, { useState, useEffect } from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
} from '@aws-amplify/ui-react';
import { listPosts } from './graphql/queries';
import {
  createPost as createPostMutation,
  deletePost as deletePostMutation,
} from './graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import { uploadData, getUrl, remove } from 'aws-amplify/storage';

const client = generateClient();

const App = ({ signOut }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const result = await client.graphql({ query: listPosts });
    console.log('result: ', result);
    const postsItems = result.data.listPosts.items;

    await Promise.all(
      postsItems.map(async (post) => {
        if (post.image) {
          const img = await getUrl({ key: post.name });
          post.image = img.url;
        }
        return post;
      })
    );
    setPosts(postsItems);
  }

  async function createPost(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get('image');
    const data = {
      name: form.get('name'),
      description: form.get('description'),
      image: image,
    };
    if (!!data.image) {
      const operation = uploadData({ key: data.name, data: image });
      await operation.result;
    }

    await client.graphql({
      query: createPostMutation,
      variables: { input: data },
    });
    fetchPosts();
    event.target.reset();
  }

  async function deletePost({ id, name }) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
    await remove({ key: name });
    await client.graphql({
      query: deletePostMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className='App'>
      <Heading level={1}>My Posts App</Heading>
      <View as='form' margin='3rem 0' onSubmit={createPost}>
        <Flex direction='row' justifyContent='center'>
          <TextField
            name='name'
            placeholder='Post Name'
            label='Post Name'
            labelHidden
            variation='quiet'
            required
          />
          <TextField
            name='description'
            placeholder='Post Description'
            label='Post Description'
            labelHidden
            variation='quiet'
            required
          />
          <View
            name='image'
            as='input'
            type='file'
            style={{ alignSelf: 'end' }}
          />
          <Button type='submit' variation='primary'>
            Create Post
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Posts</Heading>
      <View margin='3rem 0'>
        {posts.map((post) => (
          <Flex
            key={post.id || post.name}
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Text as='strong' fontWeight={700}>
              {post.name}
            </Text>
            <Text as='span'>{post.description}</Text>
            {post.image && (
              <Image
                src={post.image}
                alt={`visual aid for ${post.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation='link' onClick={() => deletePost(post)}>
              Delete post
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
