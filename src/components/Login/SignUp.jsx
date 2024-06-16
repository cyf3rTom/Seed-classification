import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/auth/register`, {
                name,
                email,
                phone,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                // Navigate to the login page after successful registration
                setEmail('');
                setPassword('');
                setPhone('');
                setName('') ;
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                    <span className="fIcon">
                        <FaUser />
                    </span>
                    <input
                        placeholder="First Name"
                        name="firstName"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="input-field">
                    <span className="fIcon">
                        <FaUser />
                    </span>
                    <input
                        placeholder="Enter Your Number"
                        name="number"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <span className="fIcon">
                        <FaEnvelope />
                    </span>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="input-field">
                    <span className="fIcon">
                        <FaLock />
                    </span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <button type="submit" className="iBtn" disabled={loading}>
                    {loading ? <Spinner animation="border" variant="info" /> : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Register;
