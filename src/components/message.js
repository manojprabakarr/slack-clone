import React from 'react'
import './message.css'




function Message({message,timestamp,userimage,user}) {
    return (
        <div className="message">
             <img src={userimage} alt="" />
      <div className="message_info">
        <h4>
         {user}
          <span className="message_timestamp">
          {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
            
        </div>
    )
}

export default Message
