import React, { useState } from 'react';
import car from '../assets/car.png'; // Adjust this path as needed

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login with:', { email, password });
        } else {
            console.log('Signup with:', { username, email, password });
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setUsername('');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Left half with car image */}
            <img src={car}/>
            <div style={{
                flex: '1',
                // backgroundImage:,
                backgroundSize: 'contain', // Ensures the image retains its aspect ratio
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '20px', // Adds some spacing around the image
            }}>
            </div>

            {/* Right half with login/signup form */}
            <div style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start', // Aligns the form higher on the screen
                padding: '60px 20px 20px',
                backgroundColor: '#f9f9f9',
            }}>
                <div style={{ 
                    width: '100%', // Keeps the width the same
                    maxWidth: '400px', // Keeps the width constrained
                    minHeight: '400px', // Medium height for a professional look
                    padding: '30px', // Moderate padding inside the box
                    marginTop: '40px', // Moves the box upward
                    border: '1px solid #ccc', 
                    borderRadius: '10px', 
                    backgroundColor: '#fff' 
                }}>
                    <h2 style={{ textAlign: 'center', color: '#333' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {!isLogin && (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <label style={{ width: '100px', marginRight: '10px' }}>Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                            </div>
                        )}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label style={{ width: '100px', marginRight: '10px' }}>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label style={{ width: '100px', marginRight: '10px' }}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ flex: '1', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            />
                        </div>
                        <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '15px' }}>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}
                        <button
                            type="button"
                            onClick={toggleForm}
                            style={{ marginLeft: '5px', cursor: 'pointer', background: 'none', border: 'none', color: '#007bff' }}
                        >
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;