import './Post.css';
import avatar from './avatar.jpg';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


export default function() {
    return (
        <div className="Post">
            <div className="post-information">
                <img src={avatar} alt="avatar" />
                <div>
                <h4 className="post-author-name" >
                    Pham Van Vu          
                </h4>
                <p className="post-time">8 o'clock</p>
                </div>
            </div>
            <div className="post-content">
                <p className="text-content">
                    update avatar thoi.
                </p>
                <img className="img-content" src={avatar} />
            </div>
            <div className="post-emotions">
                <div className="like">
                    <ThumbUpIcon />
                    <p>like</p>
                </div>
                <div className="love">
                    <FavoriteIcon />
                    <p>love</p>
                </div>
                <div className="comment">
                    <ChatBubbleOutlineIcon />
                    <p>comment</p>
                </div>

            </div>
        </div>
    )
}