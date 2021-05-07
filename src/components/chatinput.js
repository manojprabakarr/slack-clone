import React,{useState} from 'react'
import './chatinput.css'
import db from '../firebase'
import firebase from 'firebase'
import {Usestatevalue} from '../StateProvider'

function Chatinput({channelId,channelName}) {
  
    const[input,setInput]=useState([])
    const [{ user }] = Usestatevalue();


    const sendMessage = (e) => {
      setInput("");
      e.preventDefault();
      if (channelId) {
        db.collection("rooms").doc(channelId).collection("messages").add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userimage: user.photoURL,
        });
      }
    };
  
    return (
        <div className="chatinput">
           <div className="forminput">
               <form>
               <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button type="submit" onClick={sendMessage}>
            Send
          </button>
               </form>

           </div>
            
        </div>
    )
}

export default Chatinput
