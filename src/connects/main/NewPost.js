import { connect } from 'react-redux';
import NewPost from '../../components/main/NewPost';
import axios from 'axios';
import { useSelector } from 'react-redux';

const createPost = ({ content, attached }) => {
    const auth = JSON.parse(localStorage.getItem('persist:root')).auth;
    console.log(auth);
    let HeaderStr = 'Bearer ' + auth.token;
    const respond = axios.post('http://localhost:8000/posts/', { content: content, attached: attached, }, { Headers: HeaderStr })
    console.log(respond.data);
}

const mapActionToProps = { createPost };


export default connect(null, mapActionToProps)(NewPost);