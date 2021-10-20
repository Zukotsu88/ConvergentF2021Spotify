import { Link } from "react-router-dom"
import bg from '../backgrounds/landing_bg.png';

export default function Landing () {
    return (
        <div className="landing-body">

        <img class="normal-bg" src={bg} />
        
        <div className="app-content">
          <div className="subtitle" id="landing-header">welcome to</div>
          <h1 className="landing-title">Wavelength</h1>
          <div className="subtitle" id="find-friends">find friends with the same frequency</div>
          
          <Link to="/login">
            <button id="landing-button">
                <div id="landing-button-text">Start Now</div>
            </button>
          
          </Link>
        </div>
      </div>
    )
}