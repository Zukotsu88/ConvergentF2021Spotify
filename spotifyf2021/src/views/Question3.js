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

        // console.log(frmdetails);

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
                <SpotifyButtonTrio leftLink="/question2" rightLink="/self_profile" rightClickHandler={submitValue} />
            </div>
        </div>
    )
}