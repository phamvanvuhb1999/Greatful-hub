import './NavBar.css';
import SearchBar from './SearchBar';
import ActiveLinks from './ActiveLinks';
import Communicates from './Communicates';

export default function(){
    return (
    <div className="NavBar sticky">
        <SearchBar />
        <ActiveLinks />
        <Communicates />
    </div>)
}