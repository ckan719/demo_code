import React, { useState } from 'react';
import Alert from '../components/Alert';
import CRUD from '../services/crud.js';
export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    // src gif
    const [postData, setPostData] = useState({
        'path': '',
        'tieude': '',
        'vande': '',
        'ytuong': '',
        'thuchien': '',
        'code': '',
        'src': '',
        'minhhoa': '',
    });

    const onChangPostData = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var data = { ...postData, }
        data[name] = e.target.value;
        setPostData(data);
        console.log(postData);
    }


    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            setErrMsg('❌');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            }).then(response => response.json()).then(data => {
                postData.src = data.msg.url;
            });
            setFileInputState('');
            setSuccessMsg('✅');
        } catch (err) {
            console.error(err);
            setErrMsg('❌');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // insert noidung
        if (postData.path === "" || postData.tieude === "") {
            alert("Nhập vào đủ trường thông tin !");
            return;
        }
        console.log(postData);
        CRUD.insertNoidung(postData).then((res) => {
            alert("Thêm thành công !");
        });
        // insert gif

    }

    return (
        <div>
            <h1 className="title">Upload</h1>
            <form style = {{'width' : '100%'}} >
                <table style = {{'width' : '100%'}}>
                    <tr>
                        <td><p>Tag (*)</p></td>
                        <td><input name='path' className='ip-noi' onChange={onChangPostData} type='text' ></input></td>
                    </tr>
                    <tr>
                        <td><p>Tiêu đề (*)</p></td>
                        <td><textarea cols="20" rows="5" name='tieude' className='ip-noi' onChange={onChangPostData} type='text' ></textarea></td>
                    </tr>
                    <tr>
                        <td><p>Đặt vấn đề (*)</p></td>
                        <td><textarea cols="20" rows="5" name='vande' className='ip-noi' onChange={onChangPostData} type='text' ></textarea></td>
                    </tr>
                    <tr>
                        <td><p>Ý tưởng (*)</p></td>
                        <td><textarea cols="20" rows="5" name='ytuong' className='ip-noi' onChange={onChangPostData} type='text' ></textarea></td>
                    </tr>
                    <tr>
                        <td><p>Thực hiện (*)</p></td>
                        <td><textarea cols="20" rows="5" name='thuchien' className='ip-noi' onChange={onChangPostData} type='text' ></textarea></td>
                    </tr>
                    <tr>
                        <td><p>Code</p></td>
                        <td>
                            <textarea name='code' className='ip-noi' onChange={onChangPostData} cols="40" rows="5"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td><p>Gif minh họa</p></td>
                        <td>
                            <input
                                className='ip-noi'
                                id="fileInput"
                                type="file"
                                name="image"
                                onChange={handleFileInputChange}
                                value={fileInputState}
                            />
                            <button className="btn-upload" type='button' onClick={handleSubmitFile}> Upload</button>
                        </td>
                        <td>
                            <Alert msg={errMsg} type="danger" />
                            <Alert msg={successMsg} type="success" />
                        </td>
                    </tr>
                    <tr>
                        <td><p>Minh họa </p></td>
                        <td><textarea cols="20" rows="5" name='minhhoa' className='ip-noi' onChange={onChangPostData} type='text' ></textarea></td>
                    </tr>

                </table>
                <div style={{ 'height': '40px', 'margin-top' : '40px'}}>
                    <div style={{ 'width': '150px', 'float': 'right' }}>
                        <button type='button' className='btn-upload' onClick={handleSubmit} >Gửi</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
