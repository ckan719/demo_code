import React from 'react';
import { useParams } from 'react-router-dom';
import CRUD from "../services/crud"
import MenuBar from '../components/Menu.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
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
        <>
            <Header />
            <MenuBar />
            <div className = 'content'>
                <h3>{items.tieude}</h3>
                <ol>
                    <li>
                        <div>
                            <h4> Vấn đề</h4>
                            <div className='item'>
                                <p id='vande'></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4> Ý tưởng :</h4>
                            <div className='item'><p id='ytuong'></p></div>
                            <h5> Thực hiện :</h5>
                            <div className='item'><p id='thuchien'></p></div>
                            <h5> Code :</h5>
                            <div className="code">
                                <pre className="language-cpp"><code id='code' className='hljs'>
                                </code></pre>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4> Minh họa cách chạy :</h4>
                            <img src={items.src} alt='' style = {{'width':'100%'}} />
                            <div className='item'><p id='minhhoa'></p></div>
                        </div>
                    </li>
                </ol>
            </div>
            <Footer />
        </>
    );
}

export default Lessions;