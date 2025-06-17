import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';
import logo from "./pic/logo.png";
import images from "./loadImages";
import { useSelector } from 'react-redux';

export const Nav = () => {
    const imageKeys = Object.keys(images);
    const imagesArray = imageKeys.map(key => images[key]);

    const extendedImagesArray = [...imagesArray, ...imagesArray];
    const user = useSelector(store => store.currentUser);
    const b = user.name;

    return (
        <>
            <div className="divlogo">
                <NavLink to="/home" className="logo-link">
                    <img src={logo} id="logo" alt="Logo" />
                </NavLink>
            </div>
            <div className="nav">
                {b && <div className='divA'>
                    <h3 className='a'>{b.substring(0, 1)}</h3></div>}
                {user.type === 'מנהל' && <NavLink to='/Add' className='link' id='v1'>הוספת רכב</NavLink>}
                {user.type === 'מנהל' && <NavLink className='link1' id='v1'>|</NavLink>}
                {user.type === 'מנהל' && <NavLink to='/TableQ' className='link' id='v1'>צפיה בהשאלות</NavLink>}
                {user.type === 'מנהל' && <NavLink className='link1' id='v1'>|</NavLink>}
                <NavLink to='/Cars' className='link' id='v1'>כל הרכבים</NavLink>
                <NavLink className='link1' id='v1'>|</NavLink>
                <NavLink to='/Login' className='link' id='v1'>התחברות</NavLink>
                <NavLink className='link1' id='v1'>|</NavLink>
                <NavLink to='/Sign' className='link' id='v1'>הרשמה</NavLink>
            </div>
            <div className='temp'></div>
            <div className="nav1">
                <div className="nav1-content">
                    {extendedImagesArray.map((src, index) => (
                        <img src={src} alt={`slide-${index}`} key={index} className="nav1-image" />
                    ))}
                </div>
            </div>
            <div className='temp1'></div>
        </>
    );
}

export default Nav;
