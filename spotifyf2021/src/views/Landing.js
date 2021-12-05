import { Link } from "react-router-dom"
import bg from '../backgrounds/landing_bg.png';
import { Button } from '@mui/material';

export default function Landing() {
  return (
    <div className="app-body">

      <img class="background" src={bg} />

      <div className="app-content">
        <div className="subtitle" id="landing-header">welcome to</div>
        <h1 className="landing-title">Wavelength</h1>
        <div className="subtitle" id="find-friends">find friends with the same frequency</div>

        <Link to="/self_profile" style={{ textDecoration: 'none' }}>
          <Button id="landing-button" variant="outlined">
            <div id="landing-button-text">Start Now</div>
          </Button>
        </Link>

      </div>
    </div>
  )
}