import React, { useState } from 'react';

const InputMessage = () => {

    const [message, setMessage] = useState([]);

    const submit = (event) => {
        event.preventDefault();
        const user = localStorage.getItem('user');
        fetch('/api/message/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user, text: message})
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        });
    };


    return (
        <div className="inputMessage">
            <form onSubmit={submit} id={'sendMessageForm'}>
                <textarea id={'messageTextarea'} placeholder={'Message'} onChange={(event => {setMessage(event.target.value)}) }>{message}</textarea>
                <button type='submit' id={'sendButton'}>h</button>
            </form>
        </div>
    )
};

export default InputMessage;