import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Sidebar() {

    const [userData, setUserData] = useState([]);

    // import user name stuff here
    // this is the top of the user info page 
    // call /user-basic-info, store into state, then 
    useEffect(() => {
        fetch('https://spotify-api-test.estaudere.repl.co/user-basic-info').then(response =>
            response.json().then(data => {
                setUserData(data);
                //console.log(data); // from here use the dop operator if needed 
            }))

    }, [])

    // this entire thing is a vertical flex box with horizontal fb on top and inner vertical at below w links 


    return (
        <div className="sb_v">

            <div className="sb_h">
                <img src={userData.image} className="sb_img" />
                <p className="sb_welcome">welcome, {userData.display_name}</p>
            </div>

            <Link to="/self_profile" style={{ textDecoration: 'none' }}>
                <p className="sb_option">your profile</p>
            </Link>
            
            <Link to="/matching" style={{ textDecoration: 'none' }}>
                <p className="sb_option">match</p>
            </Link>

            <p className="sb_option">requests</p>
            <p className="sb_option">settings</p>



        </div>
    )



}