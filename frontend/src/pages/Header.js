import React from 'react';
import {Helmet} from "react-helmet";

function Header(){

    return (
        <div className="application">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <title>Main Page - Competitive Programming Algorithms</title>
                <link rel="stylesheet" href="https://e-maxx-eng.github.io/e-maxx-eng/css/common.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/styles/xcode.min.css" />
                <script src="https://e-maxx-eng.github.io/e-maxx-eng/js/jq.js"></script>
                <script src="https://e-maxx-eng.github.io/e-maxx-eng/js/common.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/highlight.min.js"></script>
                <script>hljs.initHighlightingOnLoad();</script>
            </Helmet>
        </div>
    );
}
export default Header;