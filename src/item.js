import React, {Component} from 'react';
import './App.css';

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Item">
                <h2>Test</h2>
                <p>{this.props.text}</p>
                <img src={this.props.pic}></img>
            </div>
        )
    }
}

export default Item;
