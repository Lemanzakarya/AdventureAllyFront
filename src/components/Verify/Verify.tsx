import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../shared/Input';
import '../Login/style.css';

const Verify = () => {
    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
        setShowError(false);
        setErrorMessage('');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const storedVerificationCode = localStorage.getItem('verificationCode');

        if (verificationCode === storedVerificationCode) {
            localStorage.setItem('isVerified', 'true');
            navigate('/login');
        } else {
            setShowError(true);
            setErrorMessage('Invalid verification code.');
        }
    }

    return (
        <section className='section flex justify-content items-center'>
            <div className='flex-col w-1/3 mx-auto'>
                <h1 className='text-7xl/3 text-white text-center jomhuria-regular mt-10'>AdventureAlly</h1>
                <div className="mt-4">
                    <form className='bg-[#71a2ac] py-5 mx-3 rounded-lg flex gap-5 flex-col items-center text-sm' onSubmit={handleSubmit}>
                        <Input name='verificationCode' type='text' value={verificationCode} onChange={handleChange} placeholder='Verification Code' style={{ color: 'white' }}>{verificationCode && 'Verification Code'}</Input>
                        {showError && <p className="text-red-700 text-center">{errorMessage}</p>}
                        <button type="submit" className='bg-white rounded-full py-2 px-10 text-base'>VERIFY</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Verify;
