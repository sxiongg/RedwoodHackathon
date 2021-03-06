import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import Container from './container'
import AddReview from './Add-Review';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="navbar-header">
                        <Link to='/' className="navbar-brand"> Home </Link>
                    </div>
                    <ul className='nav navbar-nav pull-right'>
                        <li> <Link to='/add-review'> Add a Review </Link> </li>
                    </ul>
                </nav>


            </div>
        )
    }
}

export default Menu;