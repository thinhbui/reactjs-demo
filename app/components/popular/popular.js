import React, { Component } from 'react';
import './popular.css';
import api from '../../utils/api.js';
/*function RespoGrid(props) {
    return (
        <ul className="popular-list">
            {props.respo.map((res, index) => {
                return (
                    <li key={index} className="popular-item">
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <img className="avatar" alt={res.name} src={res.object.avatar_url} />
                        </ul>
                    </li>
                )
            })}
        </ul>
    );
}*/
export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null,
        }
    }
    componentDidMount() {
        api.fetchPolularRespo(this.state.selectedLanguage)
            .then((res) => {
                // console.log(res[1])
                this.setState({
                    repos: res
                })
            });
        // console.log(this.state.repos)
    }
    updateLanguage(language) {
        this.setState({ selectedLanguage: language });
        api.fetchPolularRespo(this.state.selectedLanguage)
            .then((res) => {
                this.setState({
                    repos: res
                })
            })
    }
    renderSelectLanguage() {
        let language = ["All", "JavaScript", "Ruby", "Python", "Java", "CSS"];
        return (
            <ul className="language">
                {language.map((language, index) => {
                    return (
                        <li key={index}
                            onClick={() => this.updateLanguage(language)}
                            style={{ color: this.state.selectedLanguage === language ? 'rgb(208, 2, 27)' : null }}>
                            {language}
                        </li>
                    )
                })}
            </ul>
        )
    }
    renderRespoGrid() {
        return (
            <ul className="popular-list">
                {this.state.repos.map((res, index) => {
                    return (
                        <li key={index} className="popular-item">
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className="space-list-items">
                                <li>
                                    <img className="avatar" alt={res.name}
                                        src={res.owner.avatar_url} />
                                </li>
                                <li>
                                    <a href={res.html_url}>{res.name}</a>
                                </li>
                                <li>@{res.owner.login}</li>
                                <li>{res.watchers_count} stars</li>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        );

    }
    // https://api.github.com/search/repositories?q=stars:>1+language:'+ language +'&sort=start&order=desc&type=Repositores
    render() {
        // console.log(this.state.repos)
        return (
            <div className="container">
                {this.renderSelectLanguage()}
                {this.state.repos ? this.renderRespoGrid() : <p>Loading</p>}
            </div>
        )
    }
}
