import React from 'react';

export default function Artist({ artist }) {

    console.log(artist);

    return (
        <div className="a_v">
            <img src={artist.image} className="artist_image"></img>
            <p className="artist_name">{artist.name}</p>
        </div>
    )


}