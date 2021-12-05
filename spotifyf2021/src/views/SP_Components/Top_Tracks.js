import React from 'react';
import Track from './Track';
import { useState, useEffect } from 'react';

export default function Top_Tracks({tracks}) {
    // extract top tracks here then loop across them and return mini track components in a vertical line
    
    const [trackData, setTrackData] = useState([]);

    // import user name stuff here
    // this is the top of the user info page 
    // call /user-basic-info, store into state, then 
    useEffect(() => {
        fetch('https://spotify-api-test.estaudere.repl.co/user-basic-info').then(response =>
            response.json().then(data => {
                setTrackData(data.top_songs);
                console.log(data.top_songs); // from here use the dop operator if needed 
            }))
    }, [])

    return (
        <div className="all_tracks">
            <p className="track_sec_title">top tracks this month</p>

            <div className="t_h">
                {trackData.map(track => {
                        return (<Track track={track}/>);
                })}
            </div>
        </div>
    )

    
}