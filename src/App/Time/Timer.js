import React from 'react';
import './Timer.css'

class Timer extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {date: new Date()};
  }

  render()
  {
    return (
      <h3>{this.state.date.toLocaleTimeString()}</h3>
    );
  }

  componentDidMount()
  {
    setInterval(() => {
      this.setState({
        date: new Date()
      });
    })
  }
}

export default Timer;
