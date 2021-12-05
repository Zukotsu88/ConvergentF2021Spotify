import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';

export default function Match_Card({ user_match }) {

    const [otherData, setOtherData] = useState([]);


    useEffect(() => {
        const other_id = user_match.users[1];


        fetch('https://spotify-api-test.estaudere.repl.co/user-info-with-id-' + other_id).then(response =>
            response.json().then(data => {
                setOtherData(data);
                console.log(data);
                console.log(data.display_name); // from here use the dop operator if needed 
            }))

        //console.log(user_match.users[1]);   
        console.log(user_match);

    }, []);

    return (
        <div>
            <div className="mc_h">

                <img src={otherData.image} className="mc_img" />

                <div className="mc_data">
                    <p className="mc_name">{otherData.display_name}</p>
                    <p className="mc_common">You both like a song by {user_match.common_artist}</p>

                    <div className="match_buttons">

                    <IconButton>
                        <CancelIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <Link to={"/other_profile/" + user_match.users[1]}>
                    <Button variant="contained">view user's profile</Button>
                    </Link>
                    </div>
                </div>

                <p className="percent">{user_match.percent_match}%</p>
            </div>


           
        </div>
    )

}