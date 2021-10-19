
import { useParams } from 'react-router';
import { useEffect, useState } from 'react'

const Appointment = () => {
    const { id } = useParams()

    const [services, setServices] = useState([])
    const [service, setService] = useState({})
    useEffect(() => {
        fetch('/fakeService.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        const findService = services.find(ser => ser.id === id)
        console.log(findService)
        setService(findService)
    }, [services])

    return (
        <div>

            <h1>This is Appoinment {service?.id}</h1>
            <img className="img-fluid" src={service?.img} alt="" />
            <h1>{service?.title}</h1>
            <h5>{service?.description}</h5>

        </div>
    );
};

export default Appointment;