
import { useParams } from 'react-router';

const Appointment = () => {
    const { id } = useParams()

    return (
        <div>

            <h1>This is Appoinment {id}</h1>
            <img className="img-fluid" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />

        </div>
    );
};

export default Appointment;