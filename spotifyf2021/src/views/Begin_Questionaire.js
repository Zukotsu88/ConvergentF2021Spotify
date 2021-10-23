import { Link } from "react-router-dom"
import bg from '../backgrounds/login_bg.png';

export default function Begin_Questionaire() {
  return (
    <div className="app-body">
      <img src={bg} className="background"/>

      <div className="app-content" id="beginQText">
        <div className="subtitle questTxt" id="almost_done">almost done! :)</div>
        <div className="subtitle questTxt">let's set up your profile with a few quick questions.</div>

        <Link to="/question1">
        <button className="filled-button" id="start-button">
          <div className="filled-button-txt">start now</div>
        </button>
        </Link>
      </div>

      
    </div>
  )
}