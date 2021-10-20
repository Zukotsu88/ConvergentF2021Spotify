import { Link } from "react-router-dom"
import normal_bg from '../backgrounds/login_bg.png';

export default function Login () {
    return (
    <div className="app-content">
        <img src={normal_bg} className="normal-bg"/>
        <div className="subtitle" id="please_login">to continue, log in with Spotify</div>

        <button className="filled-button">Log in with Spotify</button>
    </div>
    )
}