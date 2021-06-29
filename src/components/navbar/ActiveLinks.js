import './ActiveLinks.css';
import {useState} from 'react';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AppsIcon from '@material-ui/icons/Apps';

export default function(){
    return (
        <div className="ActiveLinks">
            <HomeIcon className="home" />
            <GroupAddIcon className="friends" />
            <OndemandVideoIcon className="watches" />
            <AppsIcon className="games" />
        </div>
    )
}