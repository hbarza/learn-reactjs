import React from 'react';
import ReactDOM from 'react-dom';
import CheckElement from './CheckElement';
import Timer from './Timer';
import './Clock.css'

class Clock extends React.Component
{
  render()
  {
    return (
      <div>
        <div id="timer">{this.props.counter.getTemplate('Press Start Button!')}</div>
        <button type="button" onClick={this.start.bind(this)}>Start</button>
        <button type="button" onClick={this.props.counter.stop.bind(this)}>Stop</button>
      </div>
    );
  }

  /** tried to use both models in Start and Stop buttons */
  start()
  {
    this.props.counter.start();
  }
}

export default Clock;

CheckElement.check('#clock').then((selector) => {
    ReactDOM.render(<Clock counter={new Timer()}/>, selector);
});
