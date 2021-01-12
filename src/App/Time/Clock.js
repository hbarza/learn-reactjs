import React from 'react';
import Timer from './Timer';

class Clock extends React.Component
{
  render()
  {
    return (
      <div id="clock">
        <div id="timer"><Timer /></div>
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
