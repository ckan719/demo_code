import React, { useState } from 'react';
import Alert from '../components/Alert';
import CRUD from '../services/crud.js';
import Header from '../components/Header.js';
import MenuBar from '../components/Menu.js';
import Footer from '../components/Footer.js';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    let history = useHistory();
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
            history.push('/');
        });
        // insert gif

    }

    return (
        <>
            <Header />
            <MenuBar />
            <div className='content'>
                <h3 className="title">Upload</h3>
                <Form>
                    <FormGroup>
                        <Label for="">Tag(*)</Label>
                        <Input name='path' onChange={onChangPostData} type="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Tiêu đề (*)</Label>
                        <Input name='tieude' onChange={onChangPostData} type="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Đặt vấn đề (*)</Label>
                        <Input name='vande' onChange={onChangPostData} type="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Ý tưởng (*)</Label>
                        <Input name='ytuong' onChange={onChangPostData} type="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Thực hiện (*)</Label>
                        <Input name='thuchien' onChange={onChangPostData} type="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Code</Label>
                        <Input name='code' onChange={onChangPostData} type="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Gif minh họa</Label>
                        <Input name='image' onChange={handleFileInputChange} value={fileInputState} type="file" />
                        <Button type='button' onClick={handleSubmitFile}> Upload</Button>
                        <Alert msg={errMsg} type="danger" />
                        <Alert msg={successMsg} type="success" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="">Minh họa</Label>
                        <Input name='minhhoa' onChange={onChangPostData} type="textarea" />
                    </FormGroup>
                    <Button type='button' onClick={handleSubmit} >Gửi</Button>
                </Form>
            </div>
            <div>
                <p>Viết công thức toán học ở <a href='https://www.codecogs.com/latex/eqneditor.php'>codecogs</a></p>
            </div>
            <Footer />
        </>
    );
}
