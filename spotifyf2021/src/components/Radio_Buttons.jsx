import React, { Component } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField } from '@mui/material';

class Radio_Buttons extends Component {

    constructor(props) {
        super();

        this.state = {
            gender: '',
            // selectedItem: null,
            otherText: null
        };
    }

    onValChange = (e) => {
        this.setState({ gender: e.target.value }, () => {
            console.log(this.state.gender);
            this.props.setter(this.state.gender);
        });
    }

    selectItem = item => {
        this.setState({gender: item}, () => {
            // selectedItem: item
            console.log(this.state.gender);
            this.props.setter(this.state.gender);
        });
    };

    handleOtherChange = event => {
        this.setState({otherText: event.target.value}, () => {

        });

        this.selectItem(event.target.value);
    };

    focusOther = () => {
        this.setState({
            gender: "other"
        });

        this.selectItem(this.state.otherText);
    };

    render() {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend" className="questionaire_title">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    // defaultValue="male"
                    name="radio-buttons-group"
                    onChange={this.onValChange}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" checked={this.state.gender == "male"} />
                    <FormControlLabel value="female" control={<Radio />} label="Female" checked={this.state.gender == "female"} />

                    <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label={
                            <TextField
                                placeholder="other"
                                onChange={this.handleOtherChange}
                                onFocus={this.focusOther}
                            />
                        }

                        checked={this.state.gender != "male" && this.state.gender != "female" && this.state.gender != ""}
                        onChange={() => this.selectItem(this.state.otherText)}
                    />
                </RadioGroup>
            </FormControl>
        );
    }
}

export default Radio_Buttons;