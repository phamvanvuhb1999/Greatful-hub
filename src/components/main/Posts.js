import './Posts.css';
import Post from './Post';

let a =[1, 2, 3, 4, 5];

export default function({posts}){
    return (
        <div className="Posts">
            {a.map((item, index) => (
                <Post key={index} />
            ))}
        </div>
    )
}