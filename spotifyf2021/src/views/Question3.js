import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import Radio_Buttons from '../components/Radio_Buttons';
import { useState } from 'react';

export default function Question3() {

    const [pronouns, setPronouns] = useState('');
    const [gender, setGender] = useState('');

    const submitValue = () => {
        const frmdetails = {
            'Pronouns': pronouns,
            'Gender': gender == null ? 'other' : gender
        }

        console.log(frmdetails);
    }

    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions">
            <h3 className="questionaire_title">Gender</h3>
                <div id="radio_wrapper">
                    <Radio_Buttons id="radio_buttons" setter={setGender} gender={gender} />
                </div>
                <input type="text" className="long_input" placeholder="Pronouns: "
                    onChange={e => setPronouns(e.target.value)}></input>
                <SpotifyButtonTrio leftLink="/question2" rightLink="/question3" rightClickHandler={submitValue} />
            </div>
        </div>
    )
}