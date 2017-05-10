import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className='container'>
                <ul className="nav">
                    <li>
                        <NavLink exact activeClassName='active' to='/'>
                            Home
                </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/battle'>
                            Battle
                </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/popular'>
                            Popular
                </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Nav;