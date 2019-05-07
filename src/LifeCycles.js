import React from 'react';

class LifeCycles extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    title: '',
    globalTitle: '',
  };
  console.log(this.state.date)
  // this.onClickHandler = this.onClickHandler.bind(this);
}

componentDidMount() {
  window.addEventListener('resize', this.logOnResize);
}

componentDidUpdate() {
  console.log('New Change')
}

componentWillUnmount() {
  window.removeEventListener('resize', this.logOnResize);
}

  render  () {
    return (
      <h1>Time: {this.state.date.toLocaleString()}</h1>
    )
  }
}


export default LifeCycles

