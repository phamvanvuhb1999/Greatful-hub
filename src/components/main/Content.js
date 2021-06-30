import './Content.css';
import NewPost from './NewPost' //'../../connects/main/NewPost';
import FriendNews from './FriendNews';
import Posts from './Posts';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function(){

    const [posts,updatePosts] = useState([]);

    const token = useSelector(state=>state.auth.token);
    const profile = useSelector(state => state.auth.profile);

    useEffect(async () => {
        let AuthStr = 'Bearer ' + token;
        const respond = await axios.get('http://localhost:8000/posts/', //+ auth.profile._id,
                { Headers:
                    { Authorization: AuthStr }
                }
            );
        console.log(respond.data);
        if(respond && respond.data && respond.data.data.length > 0){
            updatePosts(respond.data.data.map((post) => {
                return {
                    id:post._id,
                    content:post.content,
                    created_date:post.create_at,
                    author_name:profile.fullname,
                    attached:post.attached,
                    //author_id:post.author_id
                }
            }))
        }
    }, []);

    return (
        <div className="Content">
              {/* Friends News */}
              <FriendNews />
              {/* new Post */}
              <NewPost />
              {/* posts */}
              <Posts posts={posts}/>
            
        </div>
    )
}