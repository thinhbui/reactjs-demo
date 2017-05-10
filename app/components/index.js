import React, { Component } from 'react';
import Popular from './popular/popular.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './home/nav.js';
import Home from './home/home.js';
import Battle from './battle/battle.js'
export default class Index extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/battle' component={Battle} />
                        <Route path='/popular' component={Popular} />
                        <Route render={() => {
                            return (<h1>Page Not Found</h1>)
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}