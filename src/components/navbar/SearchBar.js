import SearchIcon from '@material-ui/icons/Search';
import {useState} from 'react';
import './SearchBar.css';

export default function(){
    const [text, setText] = useState("");
    return (
        <div className="SearchBar">
            <SearchIcon className="SearchIcon" />
            <input placeholder="Search on GHub..." value={text} onChange={(e) => setText(e.target.value)}  />
        </div>
    )
}