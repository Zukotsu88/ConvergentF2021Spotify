import React from 'react';
import Artist from './Artist';
import { useState, useEffect } from 'react';

export default function Top_Artists() {

    const [artistData, setArtistData] = useState([]);

    // import user name stuff here
    // this is the top of the user info page 
    // call /user-basic-info, store into state, then 
    useEffect(() => {
        fetch('https://spotify-api-test.estaudere.repl.co/user-basic-info').then(response =>
            response.json().then(data => {
                setArtistData(data.top_artists);
                console.log(data.top_artists); // from here use the dop operator if needed 
            }))
    }, [])


    return (
        <div className="a_h">
            <p className="artist_title">top artists this month</p>

            <div className="artists">
                {artistData.map(artist => {
                    return (<Artist artist={artist} />);
                })}
            </div>



        </div>
    )


}