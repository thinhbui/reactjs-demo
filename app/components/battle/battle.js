import React from 'react';
import { Link } from 'react-router-dom';
import './battle.css';

class PlayerView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.avatar, this.props.username)
        return (
            <div className="column">
                <img className="avatar" src={this.props.avatar} alt={"Avatar for " + this.props.avatar} />
                <h2 className="username">@{this.props.username}</h2>
                <button className="reset"
                    onClick={this.props.onReset.bind(null, this.props.id)}>Reset</button>
            </div>
        )
    }
}

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
        // console.log(event);
        var value = event.target.value;
        this.setState({
            username: value,
        })
    }
    handleSubmit(event) {
        // console.log(this.props.id, this.state.username);
        event.preventDefault();
        this.props.onSubmit(
            this.props.id,
            this.state.username
        )
    }
    render() {
        return (
            <form className="column" onSubmit={this.handleSubmit}>
                <label className="header" htmlFor="username">
                    {this.props.label}
                </label>
                <input
                    id="username"
                    placeholder="name"
                    type="text" autoComplete="off"
                    value={this.state.username}
                    onChange={this.handleChange} />
                <button
                    className="button"
                    type="submit"
                    disabled={!this.state.username}>Submit</button>
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
            player1Image: null,
            player2Image: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleSubmit(id, username) {
        this.setState(() => {
            var newState = {};
            newState[id] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        })
    }
    handleReset(id) {
        this.setState(() => {
            var newState = {};
            newState[id] = '';
            newState[id + 'Image'] = null;
            return newState;
        })
    }
    render() {
        const { player1, player2, player1Image, player2Image } = this.state
        return (
            <div>
                <div className="row">
                    {!player1 && <PlayerInput id="player1" label="Player 1" onSubmit={this.handleSubmit} />}
                    {player1Image !== null &&
                        <PlayerView
                            avatar={player1Image}
                            username={player1}
                            onReset={this.handleReset}
                            id="player1"
                        />
                    }
                    {!player2 && <PlayerInput id="player2" label="Player 2" onSubmit={this.handleSubmit} />}
                    {player2Image !== null &&
                        <PlayerView
                            avatar={player2Image}
                            username={player2}
                            onReset={this.handleReset}
                            id="player2"
                        />
                    }

                </div>
                {player1 && player2 &&
                    <Link className="button" to="/">Battle</Link>
                }
            </div>
        )
    }
}