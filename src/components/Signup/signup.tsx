import React, { useState } from 'react';
import Input from '../shared/Input';
import '../Login/style.css';

interface UserState {
    email: string;
    password: string;
}

const Signup = () => {
    const [user, setUser] = useState<UserState>({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
                <h1 className='text-8xl/10 text-white text-center jomhuria-regular'>AdventureAlly</h1>
                <div className="mt-8">
                    <form className='bg-[#71a2ac] py-16 rounded-lg flex gap-5 flex-col items-center'>
                        <Input name='email' type='text' value={user.email} onChange={handleChange} placeholder='E-mail'>{user.email && 'E-mail'}</Input>
                        <Input name='password' type='password' value={user.password} onChange={handleChange} placeholder='Password'>{user.password && 'Password'}</Input>
                        <button className='bg-white rounded-full py-3 px-16'>SIGN UP</button>
                    </form>
                </div>
                <p className='text-base/10 text-white text-center'>Already have an account? <a href="/login" className="underline">Log in</a></p>
            </div>
        </section>
    )
}

export default Signup;
