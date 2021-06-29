import './SliceLeft.css';
import avatar from './avatar.jpg';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StarsIcon from '@material-ui/icons/Stars';


export default function(){
    return (
        <div className="SliceLeft">
           <div className="profile">
                <img alt="avatar" src={avatar} />
                <h4>Pham Van Vu</h4>
           </div>
           <div className="information">
               <div className="if-friends if-infor" >
                    <PeopleOutlineIcon />
                    <h4 className="if-tag">friends</h4>
               </div>
               <div className="if-groups if-infor" >
                    <GroupWorkIcon />
                    <h4 className="if-tag">groups</h4>
               </div>
               <div className="if-saved if-infor">
                   <BookmarkBorderIcon />
                   <h4 className="if-tag">saved</h4>
               </div>
               <div className="if-favour if-infor">
                    <FavoriteBorderIcon />
                    <h4 className="if-tag">favour</h4>
               </div>
               <div className="if-watches if-infor">
                    <OndemandVideoIcon />
                    <h4 className="if-tag">watches</h4>
               </div>
               <div className="if-events if-infor">
                   <StarsIcon />
                   <h4 className="if-tag">events</h4>
               </div>
           </div>
        </div>
    )
}