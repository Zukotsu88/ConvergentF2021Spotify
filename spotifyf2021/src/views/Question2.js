import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import { useState } from 'react';

export default function Question2() {

    const [uteid, setEid] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [major, setMajor] = useState('');

    const submitValue = () => {
         const frmdetails = {
            'UTEid' : uteid,
            'GradYear' : gradYear,
            'Major' : major
        }

        console.log(frmdetails);
    }

    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions questions2">
                <h3 className="questionaire_title">Student information</h3>
                <input type="text" className="long_input" placeholder="UTeid*" onChange={e => setEid(e.target.value)}></input>
                <input type="text" className="long_input" placeholder="Anticipated Graduation Year*" onChange={e => setGradYear(e.target.value)}></input>
                <input type="text" className="short_input" placeholder="Major*" onChange={e => setMajor(e.target.value)}></input>

                <SpotifyButtonTrio leftLink="/question1" rightLink="/question3" rightClickHandler={submitValue}/>
            </div>
        </div>
    )
}