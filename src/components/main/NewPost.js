import avatar from './avatar.jpg';
import './NewPost.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ImageIcon from '@material-ui/icons/Image';
import MoodIcon from '@material-ui/icons/Mood';
import { useState } from 'react';
import axios from 'axios';


export default function(){
    const [content, setContent] = useState('');
    const handleSubmitPost = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target)
        const form = Object.fromEntries(data);
        console.log(form);
        const auth = JSON.parse(localStorage.getItem('persist:root')).auth;
        let HeaderStr = 'Bearer ' + JSON.parse(auth).token;
        console.log(HeaderStr);
        axios.post('http://localhost:8000/posts/', 
        data,
        { headers:
            { authorization: HeaderStr },
            "Content-Type":"Application/form-data",
        });
    }
    return (
        <div className="NewPost">
            <form onSubmit={handleSubmitPost}>
            <div className="post-input">
                <img  src={avatar} alt="avatar" />
                <input name="content" value={content} onChange={e => {setContent(e.target.value)}} placeholder="What do you think now ?" />
            </div>
            <div className="post-attachs">
                <div className="post-att">
                <VideoCallIcon className="post-attach"/>
                <h4>Live Video</h4>
                </div>
                <div className="post-att">
                <ImageIcon className="post-attach"/>
                <label htmlFor="file">
                <h4>Image/Video</h4>
                </label>
                <input type="file" id="file" name="attached"/>
                </div>
                <div className="post-att">
                <MoodIcon className="post-attach"/>
                <h4>Emotions/Activities</h4>
                <button type="submit">submit</button>
                </div>
            </div> 
            </form>           
        </div>
    )
}