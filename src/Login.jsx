import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * A component that handles user login, including form submission.
 * It captures email and password inputs and logs the form data on submission.
 *
 * @component
 * @returns {JSX.Element} - Returns a login form with email and password fields.
 */
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    );
}