import React, { Component } from 'react';

class Form extends Component
{
    render()
    {
        return (
            <div>
                <label htmlFor="celsius">Celsius</label>
                <input type="number" 
                    name="temperature[celsius]" 
                    id="celsius" 
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default Form;
