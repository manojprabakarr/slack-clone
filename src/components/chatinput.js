import React,{useState} from 'react'
import './chatinput.css'


function Chatinput() {
    const[input,setInput]=useState([])
    return (
        <div className="chatinput">
           <div className="forminput">
               <form>
               <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message"
          />
          <button type="submit">
            Send
          </button>
               </form>

           </div>
            
        </div>
    )
}

export default Chatinput
