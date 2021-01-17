import React, { useState } from 'react';
import Alert from '../components/Alert';
import CRUD from '../services/crud.js';
import Header from '../components/Header.js';
import MenuBar from '../components/Menu.js';
import Footer from '../components/Footer.js';
import Extensions from '../components/Extensions';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import useClipboard from 'react-hook-clipboard';
export default function Upload() {
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    let history = useHistory();
    const [contentClipboard, setContentClipboard] = useClipboard();

    const onSetContentClipboard = (data) => {
        setContentClipboard(data);
    }

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
            setErrMsg('Upload ảnh không thành công !');
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
            //setFileInputState('');
            setSuccessMsg('Upload ảnh thành công !');
        } catch (err) {
            console.error(err);
            setErrMsg('Upload ảnh không thành công !');
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
                <Container>
                    <Row>
                        <Col>
                            <h3 className="title">Upload</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="11">
                            <Form>
                                <FormGroup>
                                    <Label for="path">Tag(*)</Label>
                                    <Input id = 'path' name='path' onChange={onChangPostData} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="tieude">Tiêu đề (*)</Label>
                                    <Input id = 'tieude' name='tieude' onChange={onChangPostData} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="vande">Đặt vấn đề (*)</Label>
                                    <Input id = 'vande' name='vande' onChange={onChangPostData} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="">Ý tưởng (*)</Label>
                                    <Input name='ytuong' onChange={onChangPostData} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="thuchien">Thực hiện (*)</Label>
                                    <Input id = 'thuchien' name='thuchien' onChange={onChangPostData} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="code">Code</Label>
                                    <Input id = 'code' name='code' onChange={onChangPostData} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="">Gif minh họa  </Label>
                                    <input className = 'ip-file' name='image' onChange={handleFileInputChange} value={fileInputState} type="file" />
                                    <button type='button' onClick={handleSubmitFile}> Upload</button>
                                    <Alert msg={errMsg} type="danger" />
                                    <Alert msg={successMsg} type="success" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="minhhoa">Minh họa</Label>
                                    <Input id = 'minhhoa' name='minhhoa' onChange={onChangPostData} type="textarea" />
                                </FormGroup>
                                <Button color = 'primary' type='button' onClick={handleSubmit} >Thêm bài viết</Button>
                            </Form>
                        </Col>
                        <Col xs="1" className = 'par-exten'>
                            <Extensions onSetContentClipboard = {onSetContentClipboard}  />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <p>Viết công thức toán học ở <a target="_blank" href='https://www.codecogs.com/latex/eqneditor.php'>codecogs</a></p>
            </div>
            <Footer />
        </>
    );
}
