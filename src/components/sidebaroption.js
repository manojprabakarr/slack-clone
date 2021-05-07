import React from 'react'
import './sidebaroption.css'
import {useHistory} from 'react-router-dom'
import db from '../firebase'

function Sidebaroption({ Icon, title, id, addChannelOption }) {
  const History =useHistory();


  const Selectchannel=()=>{
    if (id) {
      History.push(`/room/${id}`)
    }
    else {
      History.push(title)
    }
  }

  const addchannel = () => {
    const channelName = prompt("Please enter a channel name");

    db.collection("rooms").add({
      name: channelName,
    });
  };
    return (
        <div
        className="sidebar_option"
        onClick={addChannelOption ? addchannel : Selectchannel}
        
      >
        {Icon && <Icon className="sidebarOption_icon" />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <h3 className="sidebarOption_channel">
            <span className="sidebarOption_hash">#</span> {title}
          </h3>
        )}
      </div>
    )
}

export default Sidebaroption
