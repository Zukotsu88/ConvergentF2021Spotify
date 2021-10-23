import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import Radio_Buttons from '../components/Radio_Buttons';

export default function Question3() {
    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions">
                <h3 className="questionaire_title">Gender</h3>
                {/* <Radio_Buttons className="radio_buttons"/> */}
                <SpotifyButtonTrio leftLink="/question2" rightLink="/begin_questionaire" />
            </div>
        </div>
    )
}