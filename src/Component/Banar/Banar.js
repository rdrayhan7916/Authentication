import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banar.css'

const Banar = () => {
    return (
        <div className="">

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.state.gov/wp-content/uploads/2019/04/shutterstock_683522173-2560x852.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.shutterstock.com/image-photo/medicine-doctor-stethoscope-hand-touching-260nw-649070965.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a3/10530-banner-Lives625-6-14.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banar;