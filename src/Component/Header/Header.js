import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar className='navbar' bg="blue" variant="blue">
                <Container>
                    <Navbar.Brand to="home">Medizo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="p-2 link" to="/home">Home</Link>
                        <Link className="p-2 link" to="about">About</Link>
                        <Link className="p-2 link" to="services">Services</Link>
                        <p className="pt-2">{user.displayName}</p>
                        {user.email ?<Link className='p-2 link'> <button  onClick={logOut}>Log Out</button></Link> :
                            <Link className='p-2 link' to="login">Login</Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;