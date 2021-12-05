import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import { useState, useEffect } from 'react';

export default function Question2() {

    const [uteid, setEid] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [major, setMajor] = useState('');
    const [postId, setPostId] = useState('');

    const SubmitValue = () => {
         const frmdetails = {
            'UTEid' : uteid,
            'GradYear' : gradYear,
            'Major' : major
        }

        //console.log(frmdetails);

        // useEffect(() => {
        //     // POST request using fetch inside useEffect React hook
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(frmdetails)
        //     };

        //     fetch('https://spotify-api-test.estaudere.repl.co/', requestOptions)
        //         .then(response => response.json())
        //         .then(data => setPostId(data.id));
            
        //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // }, []);

            // HAS NOTHING TO DO WITH THE FRM DETAILS DICTIONARY
            // useEffect(() => {
            // POST request using fetch inside useEffect React hook
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({})
                };

                // fetch('https://spotify-api-test.estaudere.repl.co/user-matches', requestOptions)
                //     .then(response => response.json()).catch(error => console.log(error))
                //     .then(data => setPostId(data.id));
                
                fetch('https://spotify-api-test.estaudere.repl.co/user-matches', requestOptions)
                .then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

                // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // }, []);

        console.log(postId);
    }

    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions questions2">
                <h3 className="questionaire_title">Student information</h3>
                <input type="text" className="long_input" placeholder="UTeid*" onChange={e => setEid(e.target.value)}></input>
                <input type="text" className="long_input" placeholder="Anticipated Graduation Year*" onChange={e => setGradYear(e.target.value)}></input>
                <input type="text" className="short_input" placeholder="Major*" onChange={e => setMajor(e.target.value)}></input>

                <SpotifyButtonTrio leftLink="/question1" rightLink="/question3" rightClickHandler={SubmitValue}/>
            </div>
        </div>
    )
}