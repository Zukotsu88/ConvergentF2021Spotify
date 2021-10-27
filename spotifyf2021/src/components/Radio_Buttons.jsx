import React, { Component } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

class Radio_Buttons extends Component {

    constructor(props) {
        super();

        this.state = {
            gender: 'male'
        };

        this.onValChange = this.onValChange.bind(this);
        // this.props.setter(this.state.gender);
        
        // this.sendChange = () => {

        // };
    }

    onValChange = (e) => {
        this.setState({
            gender: e.target.value
        });

        this.props.setter(this.state.gender);
        console.log(this.state.gender);
    }

    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend" className="questionaire_title">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    defaultValue="male"
                    name="radio-buttons-group"
                    onChange={this.onValChange}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" checked={this.state.gender == "male"}/>
                    <FormControlLabel value="female" control={<Radio />} label="Female" checked={this.state.gender == "female"}/>
                    <FormControlLabel value="other" control={<Radio />} label="Other" checked={this.state.gender == "other"}/>
                </RadioGroup>
            </FormControl>
        );
    }
}

export default Radio_Buttons;