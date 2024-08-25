import React, { useState } from 'react';
import logo from '../assets/logo.jpeg'; // Adjust this path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="d-flex min-vh-100">
            {/* Left half with car image */}
            <div className="d-none d-md-block flex-fill">
                <img src={logo} alt="Car" className="img-fluid w-100 h-100" style={{ objectFit: 'contain' ,maxHeight: '100vh', }} />
            </div>

            {/* Right half with login/signup form */}
            <div className="d-flex flex-column justify-content-center align-items-center flex-fill bg-light p-4">
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <div className="border rounded p-4 bg-white shadow-sm">
                        <h2 className="text-center mb-4">{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>
                        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                            {!isLogin && (
                                <div className="form-group d-flex align-items-center">
                                    <label htmlFor="username" className="col-form-label me-2">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        className="form-control"
                                    />
                                </div>
                            )}
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="email" className="col-form-label me-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group d-flex align-items-center">
                                <label htmlFor="password" className="col-form-label me-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{backgroundColor:'#00008B'}}>
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            {isLogin ? "Don't have an account?" : 'Already have an account?'}
                            <button
                                type="button"
                                onClick={toggleForm}
                                className="btn btn-link ms-2"
                                style={{color:'#ff6347'}}
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
