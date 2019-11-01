import React, {useState} from 'react';
import {Redirect} from "react-router-dom";


export const Login = () => {
    const [name, setName] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submitHandle = (event) => {
        event.preventDefault();
        localStorage.setItem('user', name);
        setRedirect(true);
    };

    const changeHandle = (event) => {
        setName(event.target.value);
    };

    const renderRedirect = () => {
        if(redirect) {
            return (
                <Redirect to={'/main'}/>
            )
        }
    };

    return (
        <div className="loginform">
            <p>Hello</p>
            <form onSubmit={submitHandle}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={changeHandle}/>
                </label>
                <input type="submit" value="Отправить" />
            </form>
            {renderRedirect()}
        </div>
    )
};
