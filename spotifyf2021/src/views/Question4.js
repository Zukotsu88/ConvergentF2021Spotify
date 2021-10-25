import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import { useState } from 'react';
import Horizontal_Slider from '../components/horizontal_slider';

export default function Question4() {

    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions">
                <h3 className="questionaire_title">How similar in music taste do you want your match to be? </h3>


                <Horizontal_Slider id="slider"/>




                <SpotifyButtonTrio leftLink="/question2" rightLink="/"/>
            </div>
        </div>
    )

}