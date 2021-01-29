import React from 'react';

class BoilResult extends React.Component
{
    render()
    {
        let temperature = this.props.temperature;

        if (temperature >= 100) {
            return <p>The water would boil!</p>
        }

        if (temperature <= 0) {
            return <p>What! The water would freeze!</p>
        }

        return <p>The water would not boil!</p>
    }
}

export default BoilResult;
