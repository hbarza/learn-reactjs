import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component
{
  constructor(props)
  {
    super(props);
    this.start = this.start.bind(this);
    this.stop  = this.stop.bind(this);
    this.getTemplate = this.getTemplate.bind(this);

    /** since this methods don't used outside the object, there is no need to bind */
    // this.getTime = this.getTime.bind(this);
    // this.tickTock = this.tickTock.bind(this);
  }

  tickTock()
  {
    const time = this.getTemplate(this.getTime());
    this.renderTimer(time);
  }

  renderTimer(component) 
  {
    ReactDOM.render(component, document.getElementById('timer'));
  }

  getTemplate(time)
  {
    return (
      <h2>
        <span>Time: <span>{time}</span></span>
      </h2>
    );
  }

  getTime()
  {
    return new Date().toLocaleTimeString();
  }

  start()
  {
    this.tickTock();
    this.timer = setInterval(() => this.tickTock(), 1000);
  }

  stop()
  {
    this.renderTimer(this.getTemplate(this.getTime()+ ' Stopped!'));
    clearInterval(this.timer);
  }
}

export default Timer;
