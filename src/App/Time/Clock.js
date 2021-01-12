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
}

export default Clock;
