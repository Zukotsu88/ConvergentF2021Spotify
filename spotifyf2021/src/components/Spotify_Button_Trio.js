// this is a feeble attempt to create the three spotify buttons next to eachother
import { Link } from "react-router-dom"
import { Icon } from '@mui/material';
import { IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function SpotifyButtonTrio(props) {
    return (

        <div id="spot_buttons">

            <Link to={props.leftLink}>
                <IconButton className="spot_button"  color='inherit'>
                    <SkipPreviousIcon style={{ fontSize: 45, color: '5D2E8C' }}/>
                </IconButton>
            </Link>

            <IconButton className="spot_button"  color='inherit'>
                <PlayCircleIcon style={{ fontSize: 45, color: '5D2E8C'}}/>
            </IconButton>

            <Link to={props.rightLink}>
                <IconButton className="spot_button" onClick={props.rightClickHandler}  color='inherit'>
                    <SkipNextIcon style={{ fontSize: 45, color: '5D2E8C'}}/>
                </IconButton>
            </Link>

        </div>
    )
}