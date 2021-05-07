import React from 'react'
import './message.css'




function Message() {
    return (
        <div className="message">
             <img src="" alt="" />
      <div className="message_info">
        <h4>
          user
          <span className="message_timestamp">
           Date
          </span>
        </h4>
        <p>message</p>
      </div>
            
        </div>
    )
}

export default Message
