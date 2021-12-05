import React from 'react';

export default function Profile_Pic_Name({img, name, id}) {

    return (

        <div className="pp_h">
            <img src={img} className="pp_img" />

            <div className="pp_v">
                <p className="pp_pp">profile</p>
                <p className="pp_name">{name}</p>
                {/* <p className="pp_details">{id}</p> */}
            </div>

        </div>

    )

}