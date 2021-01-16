import React from 'react';

import CRUD from "../services/crud";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { Table } from 'reactstrap';
function Dashboard() {
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
        <div className='content'>
            <Table hover>
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>
                            <h4>Các thuật toán</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listItems.map((item, index) => (
                            <tr>
                                <th scope="row">
                                    {index + 1}
                                </th>
                                <td>
                                    <Link to={"/lessions/" + item.path} >{item.tieude}</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
}
export default Dashboard;