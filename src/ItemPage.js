import React, {Component} from 'react';
import './App.css';
const data = require('./mock-product.json')

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.match.params.id)
        return (
            <h1>ITEM</h1>
        )
    }
}

export default Item;
