
import {Link} from 'react-router-dom';
import React from 'react';

function Login(props) {
    return (
        <div>

            <h1>Login</h1>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
}

export default Login;

