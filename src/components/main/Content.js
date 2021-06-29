import './Content.css';
import NewPost from './NewPost';
import FriendNews from './FriendNews';
import Posts from './Posts';

export default function(){
    return (
        <div className="Content">
              {/* Friends News */}
              <FriendNews />
              {/* new Post */}
              <NewPost />
              {/* posts */}
              <Posts />
            
        </div>
    )
}