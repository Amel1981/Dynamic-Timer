import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,
      timerStopped: true,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  /*---------------------------*/
  handleStartTimer(e) {
    alert("Started...");
    e.preventDefault();
    if (this.state.timerStopped) {
      this.timer = setInterval(() => {
        this.setState({ timerStarted: true, timerStopped: false });
        if (this.state.timerStarted) {
          if (this.state.seconds > 58) {
            this.setState(prevState => ({
              minutes: prevState.minutes + 1,
              seconds: -1
            }));
          }
          if (this.state.minutes > 59) {
            this.setState(prevState => ({
              hours: prevState.hours + 1,
              minutes: 0,
              seconds: -1
            }));
          }
          this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
        }
      }, 1000);
    }
  }

  /*----------------------------------------------*/
  handleStopTimer() {
    alert("Stopped...");
    this.setState({ timerStarted: false, timerStopped: true });
    clearInterval(this.timer);
  }
  /*----------------------------------------------------*/
  handleResetTimer() {
    alert("Inisialised....");
    this.setState({
      timerStarted: false,
      timerStopped: true,
      seconds: 0,
      minutes: 0,
      hours: 0
    });
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="timer">
        <div className="horloge">
          {String(this.state.hours).padStart(2, "0")} :
          {String(this.state.minutes).padStart(2, "0")} :
          {String(this.state.seconds).padStart(2, "0")}
        </div>
        <div className="texthour">
          <h6> Hours</h6>
          <h6> Seconds</h6>
          <h6> Minutes</h6>
        </div>
        <div className="button">
          <button
            type="submit"
            value=" start"
            onClick={this.handleStartTimer.bind(this)}
            className="btn"
          >
            Start
          </button>
          <button
            type="submit"
            value=" stop"
            onClick={this.handleStopTimer.bind(this)}
            className="btn"
          >
            stop
          </button>
          <button
            type="submit"
            value=" Reset"
            onClick={this.handleResetTimer.bind(this)}
            className="btn"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Timer />, document.body);
