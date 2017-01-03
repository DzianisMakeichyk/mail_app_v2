import React from 'react';
import TextAreaPlace from './TextAreaPlace';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this._onPickAdd = this._onPickAdd.bind(this);

    this.state = {
      isPick: false
    };
  }

  render() {
    const boundOnPickAdd = this._onPickAdd;
    return (
      <div>
        <div className="one">
          <button onClick={boundOnPickAdd}>Text</button>
        </div>
        <TextAreaPlace
          createTextArea={this.state.isPick}
        />
      </div>
    )
  }

  _onPickAdd() {
    this.setState({ isPick: true });
  }
}
