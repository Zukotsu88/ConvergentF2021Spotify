import React, { Component } from 'react';

class Radio_Buttons extends Component {

    constructor(props) {
        super();

        this.state = {
            name: 'Male'
        };

        this.onValChange = this.onValChange.bind(this);
    }

    onValChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div className="radio_buttons">
                <form>
                    <label className="radio_button">
                        <input
                            type="radio"
                            value="Male"
                            checked={this.state.name === "Male"}
                            onChange={this.onValChange} />
                        <span>Male</span>
                    </label>

                    <label className="radio_button">
                        <input
                            type="radio"
                            value="Female"
                            checked={this.state.name === "Female"}
                            onChange={this.onValChange} />
                        <span>Female</span>
                    </label>

                    <label className="radio_button">
                        <input
                            type="radio"
                            value="Other"
                            checked={this.state.name === "Other"}
                            onChange={this.onValChange} />
                        <span>
                        <input type="text" className="long_input" placeholder="Other: "
                            onChange={e => this.props.setOther(e.target.value)}></input>
                        </span>
                    </label>
                </form>
            </div>
        );
    }
}

export default Radio_Buttons;