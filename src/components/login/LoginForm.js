import './LoginForm.css';
import logo from '../main/logo.jpg';
import {useState} from 'react';

export default function({login, profile}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        login({email, password});
    }
    return (
        <div className="LoginForm">
            {profile != null && <div className="account-info">
                {<img src={profile.avatar || ""} /> }
                {<h4>{profile.fullname}</h4>}
            </div>}
            <div className="form">
                <img src={logo} />
                <form onSubmit={handleSubmit} className="login-form">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Input your email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Input your password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}