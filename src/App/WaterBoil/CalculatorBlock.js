import React, { Component } from 'react';
import CelsiusForm from './CelsiusForm';
import FahrenheitForm from './FahrenheitForm';
import BoilResult from './BoilResult';
import DegreeConvertorService from './DegreeConvertorService';

class CalculatorBlock extends Component
{
    celsiusStart = 0;

    constructor(props)
    {
        super(props);

        this.state = {
            celsius: this.celsiusStart,
            fahrenheit: DegreeConvertorService.toFahrenheit(this.celsiusStart)
        }

        this.setCelsiusTemperature = this.setCelsiusTemperature.bind(this);
        this.setFahrenheitTemperature = this.setFahrenheitTemperature.bind(this);
    }

    render()
    {
        return (
            <div className="water-boil-calculator">
                <fieldset>
                    <legend>Water Boil Calculator</legend>
                        <CelsiusForm onChange={this.setCelsiusTemperature} 
                            value={this.state.celsius}
                        />
                        <FahrenheitForm onChange={this.setFahrenheitTemperature} 
                            value={this.state.fahrenheit}
                        />
                        <BoilResult temperature={this.state.celsius} />
                </fieldset>
            </div>
        );
    }

    setCelsiusTemperature(event)
    {
        let celsiusDegree = event.target.value;
        
        this.setTemperatures(
            celsiusDegree,
            DegreeConvertorService.toFahrenheit(celsiusDegree)
        );
    }

    setFahrenheitTemperature(event)
    {
        let fahrenheitDegree = event.target.value;
        
        this.setTemperatures(
            DegreeConvertorService.toCelsius(fahrenheitDegree),
            fahrenheitDegree
        );
    }

    setTemperatures(celsiusDegree, fahrenheitDegree)
    {
        this.setState({
            celsius: celsiusDegree,
            fahrenheit: fahrenheitDegree
        });
    }
}

export default CalculatorBlock;
