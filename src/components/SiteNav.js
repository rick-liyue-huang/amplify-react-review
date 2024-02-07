import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

function SiteNav(props) {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');

  useEffect(() => {
    async function checkUser() {
      try {
        const { username } = await getCurrentUser();
        setUsername(username);
        console.log('user', username);
      } catch (err) {
        console.log(err);
      }
    }
    checkUser();
  }, []);

  const handleLogout = async () => {
    try {
      console.log('Logout');
      await signOut();

      props.updateAuthStatus(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Nav.Link href='/'>Contacts App</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {username ? (
              <Nav className='ms-md-auto'>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            ) : (
              <Nav className='ms-md-auto'>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default SiteNav;
