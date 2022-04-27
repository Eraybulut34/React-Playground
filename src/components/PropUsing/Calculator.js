import React from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '555', eray: '5454544' };
    }
    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:{this.state.eray}</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    geldi={parseFloat(temperature)} />

            </fieldset>
        );
    }
}
export default Calculator;