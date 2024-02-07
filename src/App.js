import './App.css';
import '@aws-amplify/ui-react/styles.css';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Contacts from './components/Contacts';
import {
  Authenticator,
  useTheme,
  View,
  Image,
  Text,
} from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsExports);

// import { Posts } from './components/Posts';

const App = () => {
  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign='center' padding={tokens.space.large}>
          <Image
            alt='Amplify logo'
            src='https://docs.amplify.aws/assets/logo-dark.svg'
          />
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign='center' padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  };

  return (
    <Authenticator loginMechanism={['email']} components={components}>
      {({ signOut }) => (
        <div>
          <SiteNav logout={signOut} />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/' exact={true} element={<Home />} />
            {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} /> */}
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
          <SiteFooter />
        </div>
      )}
    </Authenticator>
  );
};

export default App;
