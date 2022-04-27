import './Appointment.css'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Appointment = () => {
    const { id } = useParams()
    const appId = id;

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/fakeService.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    const findService = services.find(ser => ser.id == appId);
    console.log(findService)


    return (
        <div>

            <h1>This is Appoinment {appId}</h1>
            <img className="img-fluid" src={findService?.img} alt="" />
            <h1>{findService?.title}</h1>
            <h5>{findService?.description}</h5>
            <Link to="home"><button className="btn btn-primary m-2">Go To Home</button></Link>

        </div>
    );
};

export default Appointment;