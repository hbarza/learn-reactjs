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

    /**
     * Methods which are used in the event handlers (like "onClick" in here,
     * which somehow is like a public method) have to bind. Otherwise they
     * don't work correctly and the `this` will be undefined.
     *
     * See this link for more info:
     * @link https://reactjs.org/docs/handling-events.html
     */
    this.toggleTimer  = this.toggleTimer.bind(this);
  }

  render()
  {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <button type="button" className="timer_btn" onClick={this.toggleTimer}>
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

  /**
   * Regarding this article:
   * @link https://reactjs.org/docs/handling-events.html
   *
   * It's possible to use experimental public class field syntax, instead
   * binding this method in the constructor. But as a warning you should know
   * this is an experimental syntax which means it needs to be enabled in the
   * library or framework. However this is enabled by default if setup a project
   * with `npx create-react-app my-app`, but using it in another ready project
   * needs to make sure the feature is enabled.
   * Another issue is, if the feature disables later, we will run into errors,
   * so it seems using constructor binding is the safest approach to use.
   */
  // toggleTimer = () =>
  toggleTimer(event)
  {
    event.preventDefault();
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

  getDate()
  {
    return new Date();
  }
}

export default Timer;
