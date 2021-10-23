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
            <div className="App">
                <form>
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            checked={this.state.name === "Male"} />
                        <span>Male</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Female"
                            checked={this.state.name === "Female"} />
                        <span>Female</span>
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Other"
                            checked={this.state.name === "Other"} />
                        <span>Other</span>
                    </label>
                </form>
            </div>
        );
    }
}

export default Radio_Buttons;