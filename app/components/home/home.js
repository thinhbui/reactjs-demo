import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
export default class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1>Github Battle: Battle your friends... and stuff.</h1>
                <Link to="/battle" className="button" >Battle</Link>
            </div>
        )
    }
}