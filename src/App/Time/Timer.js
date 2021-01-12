import React from 'react';
import './Timer.css'

class Timer extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      date: this.getDate(),
      timer: false
    };

    this.start = this.start.bind(this);
    this.stop  = this.stop.bind(this);
  }

  render()
  {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <button type="button" className="timer_btn" onClick={this.toggleTimer.bind(this)}>
          {this.state.timer ? 'Stop' : 'Start'}
        </button>
      </div>
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

  tick()
  {
    this.setState({
      date: this.getDate()
    });
  }

  toggleTimer()
  {
    this.state.timer ? this.stop() : this.start();
  }

  start()
  {
    this.tick();

    let timer = setInterval(() => this.tick(), 1000);

    this.setState({timer: timer});
  }

  stop()
  {
    clearInterval(this.state.timer);

    this.setState({timer: false});
  }

  getDate(format)
  {
    return new Date();
  }
}

export default Timer;
