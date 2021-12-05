import React from 'react';
import Profile_Pic_Name from './SP_Components/Profile_Pic_Name';
import Top_Artists from './SP_Components/Top_Artists';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';

export default function Self_Profile() {
    // profile pic with information
    const [userData, setUserData] = useState([]);

    // import user name stuff here
    // this is the top of the user info page 
    // call /user-basic-info, store into state, then 
    useEffect(() => {
        fetch('https://spotify-api-test.estaudere.repl.co/user-basic-info').then(response =>
            response.json().then(data => {
                setUserData(data);
                console.log(data); // from here use the dop operator if needed 
            }))

    }, [])

    
    // STACK ALL OF THESE AS A VERTICAL FLEXBOX
    // 1) top artists 
    // 2) top tracks this month 
    // 3) mood recently 
    // 4) top genres bar graph
    // 5) obscurity calculation 

    // CREATE SIDEBAR SEPARATELY
    // BIND V FB AND SIDEBAR USING HORIZONTAL FLEXBOX

    return (
        <div className="sp_app">
            <div className="sp_app_v">
                <Profile_Pic_Name img={userData.image} name={userData.display_name} id={userData.id}/>
                <div className="sp_v_body">
                    {/* <Top_Artists top_artists={userData.top_artists}/> */}
                    {/* <Top_Tracks />
                    <Recent_Mood />
                    <Top_Genres />
                    <Obscurity /> */}
            
                </div>
            </div>

            <Sidebar></Sidebar>

        </div>
    ) 

}