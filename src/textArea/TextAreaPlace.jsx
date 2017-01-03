import React, { Component } from 'react';

export default class TextAreaPlace extends React.Component {

  constructor(props) {
    super(props);
    this._handleCreate = this._handleCreate.bind(this);
  }


  renderCreateTextArea() {
    // Przekazywanie zmienej na props
    if (this.props.createTextArea) {
      return (
        <form onSubmit={this._handleCreate}>
          <input type="text" defaultValue={this.props.writeText} placeholder="What do I need?" ref="createInput"/>
          <button>Create</button>
        </form>
      )
    }
    console.log(this._handleCreate);
  }

  renderWriteText() {
    if (this._handleCreate) {
      console.log(this.refs.createInput.value);
      return (
          <div className="iam_text">
            {this.props.writeText}
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <div className="two">
          {this.renderCreateTextArea()}
        </div>
        {this.renderWriteText()}
      </div>
    );
  }

  _handleCreate(event) {
    event.preventDefault();

    this.props.createText(this.refs.createInput.value);
    this.refs.createText.value = '';
  }
}

