import React from 'react';

class LifeCycles extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    date: new Date()
  };
  console.log(this.state.date)
  // this.onClickHandler = this.onClickHandler.bind(this);
}

componentDidMount() {
  console.log('componentDidMount')
  this.interval = setInterval(() => 
    this.setState({date: new Date()}), 1000
  );
}

componentDidUpdate() {
  console.log('New Change')
}

componentWillUnmount() {
  clearInterval(this.state.date)  
}

  render  () {
    return (
      <h1>Time: {this.state.date.toLocaleString()}</h1>
    )
  }
}


export default LifeCycles

