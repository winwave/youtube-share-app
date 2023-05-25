import { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    return (
        <div className="d-flex justify-content-between">
            <div className="px-4">
                <label className="form-label px-2">Email</label>
                <input
                    className="form-text"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={onUpdateField}
                />
            </div>
            <div className="px-4">
                <label className="form-label px-2">Password</label>
                <input
                    className="form-text"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onUpdateField}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Login/Register</button>
            </div>
        </div>
    )
}