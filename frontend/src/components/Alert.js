import React, { useState, useEffect } from 'react';

export default function Alert({ msg, type }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (msg) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 4000);
        }
    }, [msg]);
    return <>{show && <div className={`alert alert-${type}`}>{msg}</div>}</>;
}