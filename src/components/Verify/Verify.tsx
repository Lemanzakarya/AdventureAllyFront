import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
    const { token } = useParams<{ token: string }>();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/verify/${token}`);
                setMessage(response.data);
            } catch (error: any) {
                setMessage(error.response.data);
            }
        }
        verifyEmail();
    }, [token]);

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default Verify;
