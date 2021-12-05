import React from 'react';
import Profile_Pic_Name from '../SP_Components/Profile_Pic_Name';
import Sidebar from '../Sidebar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Other_Profile() {
    // profile pic with information

    const {other_id} = useParams();

    const [otherUserData, setOtherUserData] = useState([]);

    useEffect(() => {

        fetch('https://spotify-api-test.estaudere.repl.co/user-info-with-id-' + other_id).then(response =>
            response.json().then(data => {
                setOtherUserData(data);
                console.log(data);
                console.log(data.display_name); // from here use the dop operator if needed 
            }))

    }, []);

    return (
        <div className="sp_app">
            <div className="sp_app_v">
                <Profile_Pic_Name img={otherUserData.image} name={otherUserData.display_name} id={otherUserData.id}/>
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