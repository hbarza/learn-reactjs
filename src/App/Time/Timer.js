import React from 'react';
import './Timer.css'

class Timer extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {date: new Date()};
    this.start = this.start.bind(this);
    this.stop  = this.stop.bind(this);
  }

  render()
  {
    return (
      <h3>{this.state.date.toLocaleTimeString()}</h3>
    );
  }

  componentDidMount()
  {
    this.start();
  }

  componentWillUnmount()
  {
    this.stop();
  }

  start()
  {
    this.timer = setInterval(() => this.setState({
      date: new Date()
    }), 1000);
  }

  stop()
  {
    clearInterval(this.timer);
  }
}

export default Timer;
