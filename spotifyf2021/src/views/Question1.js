import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import Input_Pair from "../components/Input_Pair";

export default function Question1() {
    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions">
                <h3 className="questionaire_title">Contact information</h3>
                <input type="text" className="long_input" placeholder="Name (First, Last)*"></input>
                <input type="text" className="long_input" placeholder="Email*"></input>
              
              
              
              
                <Input_Pair firstPlaceHolder="Instagram" secondPlaceHolder="Twitter" />
                <Input_Pair firstPlaceHolder="Tiktok" secondPlaceHolder="Snapchat" />
                <SpotifyButtonTrio leftLink="/begin_questionaire" rightLink="/question2" />
            </div>
        </div>
    )
}