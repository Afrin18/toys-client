import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);

        if(password.length < 6){
            setError('password must be 6 characters or longer')
            return
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h2 className="mb-4 text-center text-5xl font-bold">Please Sign Up!</h2>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className=' text-center'><small>Already have an account? <Link className='font-semibold text-orange-500' to='/login'>Login</Link></small></p>
                        <p className='text-red-500'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;