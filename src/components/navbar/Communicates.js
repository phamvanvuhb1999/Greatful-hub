import './Communicates.css';
import {useState} from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function(){
    return (
        <div className="Communicates">
            <ChatBubbleOutlineIcon className="chats" />
            <NotificationsIcon className="notifications" />
            <ExpandMoreIcon className="account" />
        </div>
    )
}