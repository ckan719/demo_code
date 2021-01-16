import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
function MenuBar() {
    return (
        <div id="navbar">
            <span id="title">
                <Link to='/'>Dashboard</Link>
            </span>
            <span id="menu">
                <Link to='/upload'>Admin</Link>
            </span>
        </div>
    );
}
export default MenuBar;