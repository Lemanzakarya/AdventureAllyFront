import React, { useState } from 'react';
import Input from '../shared/Input';
import '../Login/style.css';
import { Link } from 'react-router-dom';

interface UserState {
    name: string;
    surname: string;
    email: string;
    password: string;
}

const Signup = () => {
    const [user, setUser] = useState<UserState>({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev: UserState) => ({ ...prev, [name]: value }));
    }

    console.log(user)

    // const handleSubmit = () => {
    //     // Form gönderimini işleyebilirsiniz
    // }

    return (
        <section className='section flex justify-content items-center'>
            <div className=' flex-col w-1/3 mx-auto'>
            <h1 className='text-7xl/8 text-white text-center jomhuria-regular'>AdventureAlly</h1>
            <Link to={'/'}>Home</Link>
                <div className="mt-6">
                    <form className='bg-[#71a2ac] py-9 rounded-lg flex gap-5 flex-col items-center'>
                        <Input name='name' type='text' value={user.name} onChange={handleChange} placeholder='Name' style={{ color: 'white' }}>{user.name && 'Name'}</Input>
                        <Input name='surname' type='text' value={user.surname} onChange={handleChange} placeholder='Surname' style={{ color: 'white' }}>{user.surname && 'Surname'}</Input>
                        <Input name='email' type='text' value={user.email} onChange={handleChange} placeholder='E-mail' style={{ color: 'white' }}>{user.email && 'E-mail'}</Input>
                        <Input name='password' type='password' value={user.password} onChange={handleChange} placeholder='Password' style={{ color: 'white' }}>{user.password && 'Password'}</Input>
                        <button className='bg-white rounded-full py-2 px-10 text-base'>SIGN UP</button>
                    </form>
                </div>
                <p className='text-sm/10 text-white text-center'>
                    Already have an account? 
                <Link to={'/login'}>Login</Link>
                </p>
            </div>
        </section>
    )
}

export default Signup;


