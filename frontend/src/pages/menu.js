import React from 'react';
function MenuBar() {
    return (
        <div id="navbar">
            <span id="title">
                <a href='/'>Dashboard</a>
            </span>
            <span id="menu">
                <a href='/upload'>Admin</a>
            </span>
        </div>
    );
}

export default MenuBar;