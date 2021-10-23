import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";

export default function Question2() {
    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions questions2">
                <h3 className="questionaire_title">Student information</h3>
                <input type="text" className="long_input" placeholder="UTeid*"></input>
                <input type="text" className="long_input" placeholder="Anticipated Graduation Year*"></input>
                <input type="text" className="short_input" placeholder="Major*"></input>

                <SpotifyButtonTrio leftLink="/question1" rightLink="/question3" />
            </div>
        </div>
    )
}