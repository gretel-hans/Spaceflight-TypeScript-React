import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MyNavbar=()=>{
    return(
        <Navbar bg="light" variant="light" fixed="top">
        <Container >
            <Link className='navbar-brand' to='/'><img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Spaceflight_Industries_logo.svg/1280px-Spaceflight_Industries_logo.svg.png' id='logo'/></Link>
          <Nav className="mx-auto">
            <Link className='nav-link' to='/'>Home</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MyNavbar