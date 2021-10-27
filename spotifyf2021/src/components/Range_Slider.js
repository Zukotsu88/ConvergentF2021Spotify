import React, { Component } from 'react';
import { Slider } from "@material-ui/core";
import { useState } from 'react';

export default function Range_Slider(props) {
    const gfg = [
        {
          value: 0,
          label: "0 %",
        },
        {
          value: 25,
          label: "25 %",
        },
        {
          value: 50,
          label: "50 %",
        },
        {
            value: 75,
            label: "75 %",
        },
        {
          value: 100,
          label: "100 %",
        },
      ];
      
      const [val, setVal] = useState([25, 75]);

      const updateRange = (e, data) => {
        setVal(data);
        console.log(val);
      };

      return (
          <Slider className="slider" value={val} valueLabelDisplay="auto" onChange={updateRange} marks={gfg} />
      );
}