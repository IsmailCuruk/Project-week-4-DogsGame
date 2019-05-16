import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import {NavLink} from "react-router-dom";
import '../CSS/HomePage.css'


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
            <img src={logo} alt="Game Logo"></img>
            <h1>WhoofWhoof</h1>
            <p>
            <button><Link to="/game1">Play Game One</Link></button>
            <button>Play Game Two</button>
            <button>Play Game Three</button>
            <button><Link to="/practice">Learn more about the breeds</Link></button>
            </p>
            </div>
        )
            
  }
}
