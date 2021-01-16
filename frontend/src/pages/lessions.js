import React from 'react';
import { useParams } from 'react-router-dom';
import CRUD from "../services/crud"
function Lessions() {
    var { path } = useParams();
    const [items, setItems] = React.useState({
        'path': '',
        'tieude': '',
        'vande': '',
        'ytuong': '',
        'thuchien': '',
        'code': '',
        'src': '',
        'minhhoa': ''
    });
    const [gifs, setGifs] = React.useState([]);


    const notifyData = () => {
        CRUD.getGifByPath(path).then(res => {
            console.log('gifs');
            //console.log(res.data);
            setGifs(res.data.data);
            console.log(gifs);
        });
        CRUD.getByTag(path).then((res) => {
            document.getElementById('vande').innerHTML = res.data.data.vande;
            document.getElementById('ytuong').innerHTML = res.data.data.ytuong;
            document.getElementById('thuchien').innerHTML = res.data.data.thuchien;
            document.getElementById('code').innerText = res.data.data.code;
            document.getElementById('minhhoa').innerHTML = res.data.data.minhhoa;
            setItems(res.data.data);
        });

    };
    React.useEffect(() => {
        notifyData();
    }, [path]);

    return (
        <div>
            <h2>{items.tieude}</h2>
            <ol>
                <li>
                    <div className="item">
                        <h3>Vấn đề</h3>
                        <p id='vande'></p>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <h3>Ý tưởng :</h3>
                        <p id='ytuong'></p>
                        <h4>Thực hiện :</h4>
                        <p id='thuchien'></p>
                        <h5>Code</h5>
                        <div className="code">
                            <pre className="language-cpp"><code id='code' className = 'hljs'>
                            </code></pre>
                        </div>

                    </div>
                </li>
                <li>
                    <div className="item">
                        <h3>Minh họa cách chạy :</h3>
                        <img src={items.src} alt = '' />
                        <p id = 'minhhoa'></p>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default Lessions;