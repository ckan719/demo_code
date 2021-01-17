import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function Extensions(props) {
    const { onSetContentClipboard } = props;
    const [modala, setModala] = React.useState(false);
    const [modalcode, setModalcode] = React.useState(false);
    const [modalstrong, setModalstrong] = React.useState(false);
    const toggle = (e) => {
        var key = e.target.value;
        console.log(key);
        if (key === "a")
            setModala(!modala);
        else if (key === "code")
            setModalcode(!modalcode);
        else if (key === "strong")
            setModalstrong(!modalstrong);
    }
    const close = () => {
        setModala(false);
        setModalcode(false);
        setModalstrong(false);
    }
    const showToast = () => {
        toast('Copy thành công !', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    }
    const handleCopyTagA = () => {
        var href = document.getElementById('a-href').value;
        var content = document.getElementById('a-content').value;
        var ans = "<a href = '" + href + "'>" + content + "</a>"
        onSetContentClipboard(ans);
        close();
        showToast();
    }
    const handleCopyTagCode = () => {
        var content = document.getElementById('code-content').value;
        var ans = "<code>" + content + "</code>";
        onSetContentClipboard(ans);
        close();
        showToast();
    }
    const handleCopyTagStrong = () => {
        var content = document.getElementById('strong-content').value;
        var ans = "<strong>" + content + "</strong>";
        onSetContentClipboard(ans);
        close();
        showToast();
    }
    return (
        <div className='extension'>
            <button value='a' onClick={toggle}>{'<a>'}</button><br />
            <button value='code' onClick={toggle}>{'<code>'}</button><br />
            <button value='strong' onClick={toggle}>{'<strong>'}</button><br />
            <Modal isOpen={modala} toggle={close}>
                <ModalHeader toggle={close}>Sinh code</ModalHeader>
                <ModalBody>
                    <Input id='a-href' placeholder='href' />
                    <Input id='a-content' placeholder='Content' />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleCopyTagA}>Copy</Button>{' '}
                    <Button color="secondary" onClick={close}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalcode} toggle={close}>
                <ModalHeader toggle={close}>Sinh code</ModalHeader>
                <ModalBody>
                    <Input id='code-content' placeholder='Content' />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleCopyTagCode}>Copy</Button>{' '}
                    <Button color="secondary" onClick={close}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modalstrong} toggle={close}>
                <ModalHeader toggle={close}>Sinh code</ModalHeader>
                <ModalBody>
                    <Input id='strong-content' placeholder='Content' />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleCopyTagStrong}>Copy</Button>{' '}
                    <Button color="secondary" onClick={close}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}
export default Extensions;