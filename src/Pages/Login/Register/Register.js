import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target)

    }
    return (
        
        <div className='register-from'>
            <Form onSubmit={handleRegister}>
                <h2 className='text-center text-primary mt-5'>Please Register</h2>
                <div className='mt-5'>

                    <input type="text" name='name' id='' placeholder='Your Name' />
                    <input type="email" name='email' id='' placeholder='Email Address' required />
                    <input type="password" name='password' id='' placeholder='Password' required />
                    <input type="submit" name='submit' value={'Register'} />
                </div>
            
            </Form>
            <p>Already have an account ? <Link to={'/login'} className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login.</Link></p>

        </div >
    );
};

export default Register;