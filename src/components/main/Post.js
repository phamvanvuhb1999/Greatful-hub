import './Post.css';
import avatar from './avatar.jpg';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


export default function({data}) {
    return (
        <div className="Post">
            <div className="post-information">
                <img src={avatar} alt="avatar" />
                <div>
                <h4 className="post-author-name" >
                    {data.author_name}       
                </h4>
                <p className="post-time">{data.created_date}</p>
                </div>
            </div>
            <div className="post-content">
                <p className="text-content">
                   {data.content}
                </p>
                <img className="img-content" src={data.attached} />
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