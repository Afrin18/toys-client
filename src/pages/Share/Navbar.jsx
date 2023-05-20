import React from 'react';
import logo from '../../../public/logo-design-for-kids-toys-2BHCPD2.jpg';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        {user && <li><Link to='/myToys'>My Toys</Link></li>}
        {user && <li><Link to='/addToy'>Add a Toy</Link></li>}
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/signUp'>Sign Up</Link></li>

    </>
    return (
        <div className="navbar bg-base-300 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <p className="">
                    <img className='h-10 w-25' src={logo} alt="" />
                    <span className='text-3xl text-green-500 font-bold'>Toys Shop</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to='/login'>
                    <button className="btn btn-ghost">Login</button>
                </Link>
                {user && <button className="btn btn-ghost" onClick={handleLogout}>Log Out</button>}
                {/* {user && <span>{user.displayName} <button className="btn btn-ghost" onClick={handleLogout}>Log Out</button></span>} */}

                {user && <div className="tooltip tooltip-left" data-tip={user.displayName}>
                    {/* <button className="btn">Hover me</button> */}
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                </div>}
                {/* <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;