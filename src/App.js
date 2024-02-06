import logo from './logo.svg';
import './App.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from '@aws-amplify/ui-react';

function App({ signOut }) {
  return (
    <View>
      <Card>
        <Image src={logo} alt='logo' />
        <Heading>Welcome to Your Amplify App</Heading>
        <Button onClick={signOut}>Sign Out</Button>
      </Card>
    </View>
  );
}

export default withAuthenticator(App);
