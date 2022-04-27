import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import emergency from '../../images/images__1_-removebg-preview.png'
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <Container>
            <div className="row  row-cols-1 row-cols-md-3 g-8">
            <div className="col">
            <div className="card ser-card  h-80">
                <img src={emergency} className="card-img-top center" alt="..." />
                <div className="card-body">
                <h3 className="card-title">Emergency Case</h3>
                <p className="card-text">We have 24 hour service here. To get emergency services, contact the number given below or visit the website.</p>
                    <h3>Phone: 987 654 321</h3>
                </div>
            </div>
        </div>
            <div className="col ">
            <div className="card ser-card h-80 ">
                <img src={emergency} className="card-img-top center" alt="..." />
                <div className="card-body">
                <h3 className="card-title">Doctors Timetable</h3>
                <p className="card-text">We have 24 hour service here. To get emergency services, contact the number given below or visit the website.</p>
                   <Button variant='danger'>TIMETABLE+</Button>
            </div>
        </div>
        </div>
            <div className="col">
            <div className="card ser-card h-80">
                <img src={emergency} className="card-img-top center" alt="..." />
                <div className="card-body mt-2">
                <h3 className="card-title">Opening Hours</h3>
                <Table striped bordered hover>
  <tbody>
    <tr>
      
      <td>Monday-Friday</td>
      <td>8.00-7.00PM</td>
    </tr>
    <tr>
      
    <td>Saturday</td>
      <td>6.00-5.00PM</td>
      
    </tr>
    <tr>
    <td>Sunday</td>
      <td>9.00-4.00PM</td>
    </tr>
    <tr>
    <td>Emergency</td>
      <td>24HRS 7Days</td>
    </tr>
  </tbody>
</Table>
        
                </div>
            </div>
        </div>
       </div>
    
            </Container>
        </div>
    );
};

export default Blog;