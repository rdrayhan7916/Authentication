import React from 'react';
import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound">
            <Container>

                <img className="my-5 img-fluid" src="https://img.freepik.com/free-vector/404-error-page-found-minimalist-dark-concept-cryptocurrency-website_111925-130.jpg?size=626&ext=jpg" alt="" />

            </Container>
            <Link to="/home"><button className="btn btn-danger p-2 m-2">Go To Home</button></Link>
        </div>
    );
};

export default NotFound;