import React from 'react';

export default function C_Artist_Song({ artist }) {

    console.log(artist);

    return (
        <div className="comp_artist">
            {/* <img src={artist.image} className="artist_image"></img> */}
            <p className="artist_name">you both like {artist}</p>
        </div>
    )


}