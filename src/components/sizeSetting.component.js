import React, { Component } from 'react';
class SizeSetting extends Component {
  changeSize(value) {
    this.props.changeFontSize(value)
  }
    render() {
        return (
          <ul className="list-group">
            <li className="list-group-item active">Size: {this.props.fontSize}px</li>
            <li className="list-group-item">
              <button type="button" className="btn btn-success" onClick={() => this.changeSize(-2)}>Giảm</button>
              <button type="button" className="btn btn-success mx-2" onClick={() => this.changeSize(2)}>Tăng</button>
            </li>
          </ul>
        );
    }
}

export default SizeSetting;