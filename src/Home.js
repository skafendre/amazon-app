import React from 'react';
import './App.css';
import Item from './item'
const data = require('./mock-product.json')


function Home() {
    console.log(data)
  return (
    <div className="App">
      <h1>Amazon</h1>
      
      <div className='navbar'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {data.map((entry, i) => (
        <Item key={i} text={entry.title} pic={entry.image}/>
      ))} 
      <Item text="testtt"></Item>
    </div>
  );
}

export default Home;
