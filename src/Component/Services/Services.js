import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./fakeService.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div>
                <h1>Services That We Provide</h1>
                <p>We Provide excellent Service For You Ultimate Good Health , Here Some Of The Service Are Included For Your better Understand That We Are Always At Your side.</p>
            </div>
            <div className="row  row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;