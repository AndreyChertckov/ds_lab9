import React from 'react';

const Message = ({user, time, text}) => {
    return (
        <div className={'message'}>
            <p>User: {user}</p>
            <p>Time: {time}</p>
            <p>Message: {text}</p>
        </div>
    )
};

export default Message;