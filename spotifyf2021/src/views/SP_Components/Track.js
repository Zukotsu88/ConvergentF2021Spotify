import React from 'react';


export default function Track({track}) {

    console.log(track);

    // a horizontal flexbox, img first, then vertical flex box w song title and artist name

    return (
        <div className="tc_h">
            <img src={track['image']} className="t_img"/>

            <p className="track_name">{track['name']}</p>
        </div>

    )
}