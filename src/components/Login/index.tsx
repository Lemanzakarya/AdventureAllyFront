import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Input from '../shared/Input';
import './style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface UserState {
    email: string;
    password: string;
}
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserState>({ email: '', password: '' });
    const [showError, setShowError] = useState(false); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setUser((prev: UserState) => ({ ...prev, [name]: value }));
        
        setShowError(false);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        if (user.email && user.password) {
            navigate('/homepage');
        } else {
            setShowError(true);
        }

        const payload = {
            email: user.email,
            password: user.password,
        };

        try {
            await axios.post('https://adventureallyweb.azurewebsites.net/api/Account/authenticate', payload);
            handleClear();
            navigate('/homepage')
        } catch (error) {
            return error;
        }
    }

    
    const handleClear = () => {
        setUser({
            email: '',
            password: '',
        });
    }

    return (
        <section className='section flex justify-content items-center p-10'>
            <div className=' flex-col w-1/3 mx-auto'>
                <h1 className='text-7xl/3 text-white text-center jomhuria-regular m-12'>AdventureAlly</h1>
                <Link to="/" className="home">Home</Link>
                <div className="mt-6">
                    <form className='bg-[#71a2ac] py-10 rounded-lg flex gap-5 flex-col items-center' onSubmit={handleSubmit}>
                        <Input name='email' type='text' value={user.email} onChange={handleChange} placeholder='E-mail' style={{ color: 'white' }}>{user.email && 'E-mail'}</Input>
                        <Input name='password' type='password' value={user.password} onChange={handleChange} placeholder='Password' style={{ color: 'white' }}>{user.password && 'Password'}</Input>
                        {showError && <p className="text-red-700 text-center">Please fill in both email and password fields!</p>}
                        <button type="submit" className='bg-white rounded-full py-2 px-10 text-base'>LOGIN</button>
                    </form>
                </div>
                <p className='text-sm/10 text-white text-center'>
                  Doesn’t have an account yet?
                  <Link to={'/signup'}> Signup</Link>
                </p>
            </div>
        </section>
    )
}

export default Login;

