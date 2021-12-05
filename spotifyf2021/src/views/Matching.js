import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Match_Card from './M_Components/Match_Card';


export default function Matching() {

    const [matches, setMatchingData] = useState([]);
    const [userName, setUserName] = useState([]);

    // import user name stuff here
    // this is the top of the user info page 
    // call /user-basic-info, store into state, then 
    useEffect(() => {
        fetch('https://spotify-api-test.estaudere.repl.co/user-matches').then(response =>
            response.json().then(data => {
                console.log(data.matches); // from here use the dop operator if needed 
                setMatchingData(data.matches);
            }));

        fetch('https://spotify-api-test.estaudere.repl.co/user-basic-info').then(response => // for current user
            response.json().then(data => {
                setUserName(data.display_name);
                console.log(data.display_name); // from here use the dop operator if needed 
            }));

    }, []);


    return (
        <div className="m_h">
            
            <div className="m_deck">
            <h3 className="deck_title">{userName}'s deck</h3>
            
                {matches.map(match => {
                    return (<Match_Card user_match={match}/>);
                })}
            </div>

            <Sidebar />
        </div>

    )

}