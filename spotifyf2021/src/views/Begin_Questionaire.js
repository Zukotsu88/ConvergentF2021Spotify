import { Link } from "react-router-dom"
import bg from '../backgrounds/login_bg.png';
import { Button } from "@mui/material";

export default function Begin_Questionaire() {
  return (
    <div className="app-body">
      <img src={bg} className="background"/>

      <div className="app-content">

        <div className="subtitle">almost done! :)</div>
        <div className="subtitle" style={{width: "900px"}}>let's set up your profile with a few quick questions.</div>

        <Link to="/question1" style={{ textDecoration: 'none' }}>
        <button className="filled-button" id="start-button">
          <div className="filled-button-txt">start now</div>
        </button>
        </Link>

      </div>

      
    </div>
  )
}