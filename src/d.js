import React, { Component } from 'react';

class d extends Component {
  render() {
    componentDidUpdate(prevProps, prevState){
        if (prevProps.value !== this.props.value){
            dosomething()
        }
    }
    return <div></div>;
  }
}

export default d;
