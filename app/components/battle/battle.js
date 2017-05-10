import React from 'react';
import { Link } from 'react-router-dom';
import './battle.css';


class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event);
        // var value = event.target.value;
        this.setState({
            username: 'value'
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.props.name
        )
    }
    render() {
        return (
            <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>
                <input placeholder="name" type="text" autoComplete="off" value={this.state.username} onChange={this.handleChange()} />
                <button className="button" type="submit" disabled={!this.state.username}>Submit</button>
            </form>
        );
    }
}
export default class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: '',
            imagePlayer1: null,
            imagePlayer2: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(id, name) {
        this.setState(() => {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        })


    }
    render() {
        return (
            <div className="row">
                {!this.state.player1 && <PlayerInput id="player1" label="Player 1" onSubmit={this.handleSubmit} />}
                {!this.state.player2 && <PlayerInput id="player2" label="Player 2" onSubmit={this.handleSubmit} />}
            </div>
        )
    }
}