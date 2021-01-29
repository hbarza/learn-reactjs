import React, { Component } from 'react'

export class FahrenheitForm extends Component {
    render() {
        return (
            <div>
                <label htmlFor="fahrenheit">Fahrenheit</label>
                <input type="number"
                    name="temperature[fahrenheit]"
                    id="fahrenheit"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default FahrenheitForm
