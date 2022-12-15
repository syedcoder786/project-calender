import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function Auth() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const responseFacebook = (res) => {
        setUserName(res.name)
        setEmail(res.email)
        console.log(res.email)
    }
    return (
        <div>
            <FacebookLogin
                appId="1177757022678990"
                // autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </div>
    );
}

export default Auth;