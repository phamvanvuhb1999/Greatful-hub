import './FriendNews.css';
import video from './video.mp4';

export default function(){
    return (
        <div className="FriendNews">
            <video className="slide-bar__video" autoPlay muted >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <video className="slide-bar__video" autoPlay muted >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <video className="slide-bar__video" autoPlay muted >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <video className="slide-bar__video" autoPlay muted >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <video className="slide-bar__video" autoPlay muted >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    )
}