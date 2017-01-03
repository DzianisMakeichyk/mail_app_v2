import React, { Component } from 'react';
import TextArea from './textArea/index';

const easeTextArea = [
  {
    text: 'React',
    isCompleted: true
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      easeTextArea
    };
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <TextArea
          createTextArea={this.createTextArea.bind(this)}
        />
      </div>
    );
  }

  createTextArea(text) {
    this.state({
      text,
      isCompleted: false
    });
    this.setState({ easeTextArea: this.state.easeTextArea });
  }

  createText(text) {
    this.state.easeText.push({
      text,
      isCompleted: false
    });
    this.setState({ easeText: this.state.easeText });
  }
}
