import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, img, title, description } = service
    return (

        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/appoinment/${id}`}> <button className="btn btn-primary">Appoinment</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Service;