// this is a feeble attempt to create the three spotify buttons next to eachother
import { Link } from "react-router-dom"

export default function SpotifyButtonTrio(props) {
    return  (
        <div id="spot_buttons">

        <Link to={props.leftLink}>
        <button className="spot_button">Left</button>
        </Link>
        <button className="spot_button">Useless Middle</button>

        <Link to={props.rightLink}>
        <button className="spot_button" onClick={props.rightClickHandler}>Right</button>
        </Link>

        </div>
    )
}