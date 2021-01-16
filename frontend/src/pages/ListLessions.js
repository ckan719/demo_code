import React from 'react';

import CRUD from "../services/crud";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
function ListLessions() {
    const [listItems, setListItems] = React.useState([]);

    const notifyData = () => {
        CRUD.getAll().then((res) => {
            console.log(res);
            setListItems(res.data.data);
        });
    };
    React.useEffect(() => {
        notifyData();
    }, []);
    
    return (
        <div>
            <h1>Các thuật toán :</h1>
            <ol>
                {
                    listItems.map((item, index) => (
                        <li>
                            <div className = 'btn-lessions'>
                                <Link  to = {"/lessions/"+item.path} >{item.tieude}</Link>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}
export default ListLessions;