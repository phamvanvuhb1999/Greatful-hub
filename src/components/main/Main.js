import './Main.css';
import SliceLeft from './SliceLeft';
import SliceRight from './SliceRight';
import Content from './Content';

export default function(){
    
    return (
        <div className="Main">
            <SliceLeft />
            <Content />
            <SliceRight />
        </div>
    )
}