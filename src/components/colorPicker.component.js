import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['red', 'blue', 'green', 'pink']
        }
    }
    showColor(color) {        
        return {
            backgroundColor: color
        };
    }
    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }
    render() {
        const elementColor = this.state.color.map((color, index) => {
            return <span 
            key={index} 
            style={ this.showColor(color)}  
            className={this.props.color === color ? 'active' : ''}
            onClick = {() => this.setActiveColor(color)}
            >
            </span>
        }) 
        return (
        <div className="col-6">
            <ul className="list-group">
              <li className="list-group-item active">Color Picker</li>
              <li className="list-group-item">
                {elementColor}
                <hr></hr>
              </li>
            </ul>
        </div>
        );
    }
}

export default ColorPicker;