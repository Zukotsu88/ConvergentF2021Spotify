import { Link } from "react-router-dom"
import normal_bg from '../backgrounds/login_bg.png';

export default function Login() {
    return (
        <div className="app-body">
            <img src={normal_bg} className="background" />

            <div className="login-content">
                <div className="subtitle please_login">to continue, log in with Spotify</div>

                <Link to="/begin_questionaire">
                <button className="filled-button" id="login_button">
                    <div className="filled-button-txt">Log in with Spotify</div>
                </button>
                </Link>
            </div>
        </div>
    )
}