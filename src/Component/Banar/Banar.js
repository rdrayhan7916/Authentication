import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banar.css'

const Banar = () => {
    return (
        <div className="">
<Container>
            <Carousel fade>
                <Carousel.Item>
                    
                    <img
                        className="d-block w-100"
                        src="https://www.news-medical.net/images/Article_Images/ImageForArticle_22261_1647875610051190.jpg"
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.ttec.com/sites/default/files/styles/article_main/public/vol3-iss4-mayo-clinic.jpg?itok=xXjKEHH8"
                        
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjS0iGrnaD_CYXOKNmc3HUhv5bmegvPn8ag&usqp=CAU"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            </Container>
        </div>
    );
};

export default Banar;