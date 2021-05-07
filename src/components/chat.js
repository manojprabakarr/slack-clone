import React,{useEffect,useState} from 'react'
import Chatinput from './chatinput'
import Message from './message'
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {useParams} from 'react-router-dom'
import './chat.css'
import db from '../firebase'


function Chat() {
  const {roomId} =useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails);
  console.log(roomMessages);
    return (
        <div className="chat">
             <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>{roomDetails?.name}</strong>
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
     
      {roomMessages.map(({ message, timestamp, userimage, user }) => (
          <Message
            message={message}
            timestamp={timestamp}
            userimage={userimage}
            user={user}
          />
        ))}
       
      </div>
      <Chatinput channelName={roomDetails?.name} channelId={roomId} />
           
            
        </div>
    )
}

export default Chat
