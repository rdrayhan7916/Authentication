import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="home">Medizo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="services">Services</Nav.Link>
                        {user.email ? <button onClick={logOut}>Log Out</button> :
                            <Nav.Link href="login">Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;