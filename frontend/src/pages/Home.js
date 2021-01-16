import React from 'react';

import CRUD from "../services/crud";

function Home() {
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
                                <a  href = {"/lessions/"+item.path} >{item.tieude}</a>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}
export default Home;