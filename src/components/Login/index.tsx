import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Input from '../shared/Input';
import './style.css';

interface UserState {
    email: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserState>({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setUser((prev: UserState) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (): void => {
        navigate('/homepage'); 
    }

    return (
        <section className='section flex justify-content items-center'>
            <div className=' flex-col w-1/3 mx-auto'>
                <h1 className='text-7xl/10 text-white text-center jomhuria-regular'>AdventureAlly</h1>
                <a href="/" className="home">Home</a>
                <div className="mt-6">
                    <form className='bg-[#71a2ac] py-10 rounded-lg flex gap-5 flex-col items-center  '>
                        <Input name='email' type='text' value={user.email} onChange={handleChange} placeholder='E-mail' style={{ color: 'white' }}>{user.email && 'E-mail'}</Input>
                        <Input name='password' type='password' value={user.password} onChange={handleChange} placeholder='Password' style={{ color: 'white' }}>{user.password && 'Password'}</Input>
                        <button className='bg-white rounded-full py-2 px-10 text-base' onClick={handleSubmit}>LOGIN</button>
                    </form>
                </div>
                <p className='text-sm/10 text-white text-center'>Doesn’t have an account yet? <a href="..\signup" className="underline">Sign up</a></p>
            </div>
        </section>
    )
}

export default Login;
