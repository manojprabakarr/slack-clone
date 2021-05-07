import React from 'react'
import './login.css'
import {auth,provider} from '../firebase'
import {Usestatevalue} from '../StateProvider'
import {actionTypes} from '../reducer'

function Login() {
    const[{},dispatch]=Usestatevalue();

    const Signin=()=> {
        auth
        .signInWithPopup(provider)
        .then((result)=> {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user

            })
        })
        .catch((err)=>{
            alert("error happened")
        })

    }
    return (
        <div className="login">
            <div className="logincontainer">
                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/306_Slack-512.png" alt="slack logo"/>

                <h1>welcome to manojprabakar slack.com</h1>
                <p>Login to manoj slack</p>

                <button type="submit" onClick={Signin}>SignIn With Google</button>

            </div>
            
        </div>
    )
}

export default Login
