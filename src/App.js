import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

// import { Posts } from './components/Posts';

const App = ({ signOut }) => {
  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
};

export default App;
