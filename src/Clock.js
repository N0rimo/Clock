import React from 'react';
import randomColor from 'randomcolor'

class Clock extends React.Component {

  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({date: new Date()})
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timesID)
  }

  render() {
    return (
      <div style={{color: randomColor()}}>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock;
