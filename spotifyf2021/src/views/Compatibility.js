import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import C_Artist_Song from './C_Components/C_Artist_Song';

export default function Compatibility() {

    // profile pic with information

    const { other_id, percent, common_artist } = useParams();
    const [userData, setUserData] = useState([]);
    const [otherUserData, setOtherUserData] = useState([]);
    // const [match, setMatchingData] = useState([]);

    console.log(percent);
    console.log(common_artist);

    useEffect(() => {

        fetch('https://spotify-api-test.estaudere.repl.co/user-basic-info').then(response =>
            response.json().then(data => {
                setUserData(data);
                console.log(data); // from here use the dop operator if needed 
            }));

        fetch('https://spotify-api-test.estaudere.repl.co/user-info-with-id-' + other_id).then(response =>
            response.json().then(data => {
                setOtherUserData(data);
                console.log(data);
                console.log(data.display_name); // from here use the dop operator if needed 
            }));

        // fetch('https://spotify-api-test.estaudere.repl.co/user-matches').then(response =>
        //     response.json().then(data => {
        //         console.log(data.matches); // from here use the dop operator if needed 
        //         console.log(data.matches.percent_match);
        //         setMatchingData(data.matches);
        //     }));

    }, []);


    return (
        <div className="c_page">

            <div className="c_sb">

                <Link to="/self_profile" className="c_sbl" style={{ textDecoration: 'none' }}>
                    <p className="c_sbt">my profile</p>
                </Link>

                <Link to="/matching" style={{ textDecoration: 'none' }}>
                    <p className="c_sbt">matches</p>
                </Link>
                <p className="c_sbt">settings</p>
            </div>

            <div className="c_h">

                <img src={userData.image} className="c_img" />
                <img src={otherUserData.image} className="c_img r_img" />

                <div className="c_percent">
                    <p className="percent_big">{percent}%</p>
                    <p className="word_compat">music compatibility</p>
                </div>
            </div>

            <C_Artist_Song artist={common_artist}/>




        </div>
    )
}