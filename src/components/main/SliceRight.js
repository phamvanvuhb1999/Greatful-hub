import './SliceRight.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import avatar from './avatar.jpg';

//for test UI
let a = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0];
export default function(){
    return (
        <div className="SliceRight">
            <div className="chat-func">
                <SearchIcon />
                <ArrowDropDownIcon />
            </div>
            <div className="friends-contact">
                <ul>
                {a.map((item, index) => (
                    <li key={index} className="friend-contact">
                        <img src={avatar} alt="avatar" />
                        <h4>Pham Van Vu</h4>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
    }