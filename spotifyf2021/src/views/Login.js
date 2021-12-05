import { useEffect } from "react";
import { Link } from "react-router-dom"
import normal_bg from '../backgrounds/login_bg.png';

export default function Login() {
    
    // function GetAuth(e) {

    //     // useEffect(() => {
    //         // GET request using fetch inside useEffect React hook
    //         // fetch('https://spotify-api-test.estaudere.repl.co/auth')
    //         //     .then(response => response.json()).catch(error => console.log(error));
    //             // .then(data => setTotalReactPackages(data.total));
        
    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    //     // }, []);
    //     window.open("https://spotify-api-test.estaudere.repl.co/auth");

    // }
    
    return (
        <div className="app-body">
            <img src={normal_bg} className="background" />

            <div className="login-content">
                <div className="subtitle please_login">to continue, log in with Spotify</div>
                <Link to="/begin_questionaire" style={{ textDecoration: 'none' }}>
                    <button className="filled-button" id="login_button">
                        <div className="filled-button-txt">Log in with Spotify</div>
                    </button>
                </Link>
            </div>
        </div>
    )
}