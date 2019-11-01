import React, {useState, useEffect} from "react";
import Message from './MessageComponent';
import InputMessage from './InputMessage';

export const Main = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('/api/message/').then((response) => {
            return response.json();
        }, () => {
            return {"status": "ok",
                "messages": [{"user": "Test", "text": "TEST", "time": "2019-11-01 16:17:15.712000"}, {
                    "user": "Test",
                    "text": "TEST",
                    "time": "2019-11-01 16:15:01.760000"
                }, {"user": "Test", "text": "TEST", "time": "2019-11-01 16:14:28.128000"}, {"user": "Test", "text": "TEST", "time": "2019-11-01 16:17:15.712000"}, {
                    "user": "Test",
                    "text": "TEST",
                    "time": "2019-11-01 16:15:01.760000"
                }, {"user": "Test", "text": "TEST", "time": "2019-11-01 16:14:28.128000"}, {"user": "Test", "text": "TEST", "time": "2019-11-01 16:17:15.712000"}, {
                    "user": "Test",
                    "text": "TEST",
                    "time": "2019-11-01 16:15:01.760000"
                }, {"user": "Test", "text": "TEST", "time": "2019-11-01 16:14:28.128000"}, {"user": "Test", "text": "TEST", "time": "2019-11-01 16:17:15.712000"}, {
                    "user": "Test",
                    "text": "TEST",
                    "time": "2019-11-01 16:15:01.760000"
                }, {"user": "Test", "text": "TEST", "time": "2019-11-01 16:14:28.128000"}]
            }
        }).then((data) => {
            setMessages(data['messages']);
        });
    }, []);

    const renderMessages = () => {
        console.log(messages);
        return messages.map(message => {
            return <Message key={message.time} {...message}/>
        });
    };

    return (
        <div className="main">
            <div className="messages">
                {renderMessages()}
            </div>
            <InputMessage/>
        </div>
    )
};
