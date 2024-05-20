import React, { useState } from 'react';
import Input from '../shared/Input';
import '../Login/style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface UserState {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserState>({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showError, setShowError] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [surnameError, setSurnameError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev: UserState) => ({ ...prev, [name]: value }));
        
        setShowError(false);
        
        if (name === 'email') validateEmail(value);
        if (name === 'name') validateName(value);
        if (name === 'password') validatePassword(value);
        if (name === 'surname') validateSurname(value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!user.name || !user.surname || !user.email || !user.password || !user.confirmPassword) {
            setShowError(true);
            return;
        }

        if (user.password !== user.confirmPassword) {
            setShowError(true);
            return;
        }

        if (emailError || nameError || passwordError || surnameError) {
            setShowError(true);
            return;
        }

        const payload = {
            firstName: user.name,
            lastName: user.surname,
            email: user.email,
            userName: user.name + (Math.random() * 1000000).toString(),
            password: user.password,
            confirmPassword: user.password
        };

        try {
            await axios.post('https://adventureallyweb.azurewebsites.net/api/Account/register', payload);
            handleClear();
            const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
            localStorage.setItem('verificationCode', verificationCode);
            localStorage.setItem('user', JSON.stringify(user));

            alert('Your verification code is: ' + verificationCode);
            navigate('/verify');

        } catch (error: any) {
            console.error('Signup error:', error.response ? error.response.data : error.message);
        }
    }

    const handleClear = () => {
        setUser({
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    const validateEmail = (email: string) => {
        const regex = /\S+@\S+\.\S+/;
        if (!regex.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    }

    const validateName = (name: string) => {
        const regex = /^[a-zA-Z0-9_-]{3,16}$/;
        if (!regex.test(name)) {
            setNameError('Name must be between 3 and 16 characters and can only contain letters, numbers, underscores, and hyphens');
        } else {
            setNameError('');
        }
    }

    const validatePassword = (password: string) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!regex.test(password)) {
            setPasswordError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number');
        } else {
            setPasswordError('');
        }
    }

    const validateSurname = (surname: string) => {
        if (!surname.trim()) {
            setSurnameError('Surname is required');
        } else {
            setSurnameError('');
        }
    }

    return (
        <section className='section flex justify-content items-center'>
            <div className=' flex-col w-1/3 mx-auto'>
                <h1 className='text-7xl/3 text-white text-center jomhuria-regular mt-10'>AdventureAlly</h1>
                <Link className='home' to={'/'}>Home</Link>
                <div className="mt-4">
                    <form className='bg-[#71a2ac] py-5 mx-3 rounded-lg flex gap-5 flex-col items-center text-sm' onSubmit={handleSubmit}>
                        <Input name='name' type='text' value={user.name} onChange={handleChange} placeholder='Name' style={{ color: 'white' }}>{user.name && 'Name'}</Input>
                        <Input name='surname' type='text' value={user.surname} onChange={handleChange} placeholder='Surname' style={{ color: 'white' }}>{user.surname && 'Surname'}</Input>
                        <Input name='email' type='text' value={user.email} onChange={handleChange} placeholder='E-mail' style={{ color: 'white' }}>{user.email && 'E-mail'}</Input>
                        <Input name='password' type='password' value={user.password} onChange={handleChange} placeholder='Password' style={{ color: 'white' }}>{user.password && 'Password'}</Input>
                        <Input name='confirmPassword' type='password' value={user.confirmPassword} onChange={handleChange} placeholder='Confirm Password' style={{ color: 'white' }}>{user.confirmPassword && 'Confirm Password'}</Input>
                        {showError && <p className="text-red-700 text-center">Please fill in all fields and make sure passwords match!</p>}
                        {emailError && <p className="text-red-700 text-center">{emailError}</p>}
                        {surnameError && <p className="text-red-700 text-center">{surnameError}</p>}
                        {nameError && <p className="text-red-700 text-center">{nameError}</p>}
                        {passwordError && <p className="text-red-700 text-center">{passwordError}</p>}
                        <button type="submit" className='bg-white rounded-full py-2 px-10 text-base'>SIGN UP</button>
                    </form>
                </div>
                <p className='text-sm/10 text-white text-center'>
                    Already have an account? 
                    <Link to={'/login'}> Login</Link>
                </p>
            </div>
        </section>
    );
}

export default Signup;
