import React, { Component } from "react";

class Toggle extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    const { render } = this.props;
    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}

export default Toggle;

// Render Prop - passing in a property on 
// your component to render something

// greeting comes from the render function from 
// this function.

// we are loading the Toggle Component in app.js
// we are setting the render() as a prop
// we are calling this function via props