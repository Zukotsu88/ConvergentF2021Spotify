import bg from '../backgrounds/common.png';
import SpotifyButtonTrio from "../components/Spotify_Button_Trio";
import { useState, useEffect } from 'react';

export default function Question1() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [snapchat, setSnapchat] = useState('');
    const [postId, setPostId] = useState('');

    const SubmitValue = () => {
         const frmdetails = {
            'Name': name,
            'Email': email,
            'Instagram': instagram,
            'Twitter': twitter,
            'Tiktok': tiktok,
            'Snapchat': snapchat
        }

        // console.log(frmdetails);

        // useEffect(() => {
            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({frmdetails})
            };

            fetch('https://spotify-api-test.estaudere.repl.co/user-track-info', requestOptions)
                .then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));
            
            // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // }, []);
        

        console.log(postId);
    }

    return (
        <div className="app-body">
            <img src={bg} className="background" />

            <div className="app-content questions">
                <h3 className="questionaire_title">Contact information</h3>
                <input type="text" className="long_input" placeholder="Name (First, Last)*"
                    onChange={e => setName(e.target.value)}></input>

                <input type="text" className="long_input" placeholder="Email*"
                    onChange={e => setEmail(e.target.value)}></input>

                {/* <Input_Pair firstPlaceHolder="Instagram" secondPlaceHolder="Twitter" /> */}

                <div className="input_pair">
                    <input type="text" className="short_input" placeholder="Instagram" onChange={e => setInstagram(e.target.value)}></input>
                    <input type="text" className="short_input" placeholder="Twitter" onChange={e => setTwitter(e.target.value)}></input>
                </div>


                <div className="input_pair">
                    <input type="text" className="short_input" placeholder="Tiktok" onChange={e => setTiktok(e.target.value)}></input>
                    <input type="text" className="short_input" placeholder="Snapchat" onChange={e => setSnapchat(e.target.value)}></input>
                </div>


                {/* <Input_Pair firstPlaceHolder="Tiktok" secondPlaceHolder="Snapchat" /> */}

                <SpotifyButtonTrio leftLink="/begin_questionaire" rightLink="/question2" rightClickHandler={SubmitValue} />
            </div>
        </div>
    )
}