import React, { Component } from 'react';

class Resuilt extends Component {

    setStyle() {
        return {
            color: this.props.color,
            borderColor:  this.props.color,
            fontSize: `${this.props.fontSize}px`
        }
    }
    render() {
        return (
        <div className="col-12">
            <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
            <div id="content" style={this.setStyle()}>
              Nội dung setting
            </div>
        </div>
        );
    }
}

export default Resuilt;