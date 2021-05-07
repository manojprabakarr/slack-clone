import React from 'react'
import Chatinput from './chatinput'
import Message from './message'
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {useParams} from 'react-router-dom'
import './chat.css'
import db from '../firebase'


function Chat() {
    return (
        <div className="chat">
             <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>name</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
     
          <Message
           
          />
       
      </div>
      <Chatinput />
           
            
        </div>
    )
}

export default Chat
