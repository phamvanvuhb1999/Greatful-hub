import avatar from './avatar.jpg';
import './NewPost.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ImageIcon from '@material-ui/icons/Image';
import MoodIcon from '@material-ui/icons/Mood';

export default function(){
    return (
        <div className="NewPost">
            <div className="post-input">
                <img  src={avatar} alt="avatar" />
                <input placeholder="What do you think now ?" />
            </div>
            <div className="post-attachs">
                <div className="post-att">
                <VideoCallIcon className="post-attach"/>
                <h4>Live Video</h4>
                </div>
                <div className="post-att">
                <ImageIcon className="post-attach"/>
                <h4>Image/Video</h4>
                </div>
                <div className="post-att">
                <MoodIcon className="post-attach"/>
                <h4>Emotions/Activities</h4>
                </div>
            </div>            
        </div>
    )
}