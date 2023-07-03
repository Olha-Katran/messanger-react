import React from 'react';
import './Login.css';

const LoginForm = () => {
    return (
        <div className="registration-save">
            <form>
                <h3 className="text-center">Form</h3>
                <div className="form-group">
                    <input className="form-control item" type="text" name="username" maxLength="15" minLength="4"
                           pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Username" required />
                </div>
                <div className="form-group">
                    <input className="form-control item" type="password" name="Пароль" minLength="6" id="password"
                           placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input className="form-control item" type="email" name="email" id="email" placeholder="Email"
                           required />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block create-account" type="submit">Sigh In</button>
                </div>
            </form>
        </div>
    )
}


export default LoginForm;