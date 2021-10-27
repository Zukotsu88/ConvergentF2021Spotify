import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import { useState } from 'react';
import Range_Slider from '../components/Range_Slider';


export default function Question4() {

    const [range, setRange] = useState([20, 40]);

    const submitValue = () => {
        const frmdetails = {
            'Range': range
        }

        console.log(frmdetails);
    }

    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions slider_content">
                <h3 className="questionaire_title slider_title">How similar in music taste do you want your match to be? </h3>
                    <Range_Slider id="slider"/>

                <SpotifyButtonTrio leftLink="/question2" rightLink="/" />
            </div>
        </div>
    )

}