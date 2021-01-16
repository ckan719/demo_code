import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
function Footer() {
    return (
        <div id="footer">
            (c) 2014-2020 translation by <Link to="#">link</Link>
        </div>
    );
}
export default Footer;