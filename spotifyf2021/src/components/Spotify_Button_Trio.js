// this is a feeble attempt to create the three spotify buttons next to eachother
import { Link } from "react-router-dom"

export default function SpotifyButtonTrio(props) {
    return  (
        <div id="spot_buttons">

        <Link to={props.leftLink}>
        <button className="spot_button">First</button>
        </Link>
        <button className="spot_button">Second</button>

        <Link to={props.rightLink}>
        <button className="spot_button">Third</button>
        </Link>

        </div>
    )
}