import React from 'react'
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import './header.css'
import {Usestatevalue} from '../StateProvider'


function Header() {
    const[{user}]=Usestatevalue();

    return (
        <div className="header">
            <div className="headerleft">
            <HelpOutlineIcon />

            </div>

            <div className="headersearch">
               
                <input type="text" placeholder="Search nothing" />
                <AccessTimeIcon/>

            </div>
             <div className="headerright">
                
                 <Avatar src={user?.photoURL} className="headeravatar" />
                

             </div>
            
        </div>
    )
}

export default Header
