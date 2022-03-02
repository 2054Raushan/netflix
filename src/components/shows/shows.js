import React , {useState , useEffect} from "react";
import {Card} from 'antd'
import './shows.css';

const { Meta } = Card;

const Movie = (props) => {

    const [width, setWidth] = useState(null);

    const handleResize = () => {
        setWidth(window.innerWidth);
      };
    
      useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
      }, []);
   
   

    return(
        <div>
            <Card
                bordered
                hoverable
                style={{ width: '100%' }}
                cover={<img src={props.imgUrl} style={{width:'100%'}} />}
            >
                <Meta  description={props.text} title={props.title} />
                <div>{props.date}</div>
                <div style={{color: 'green'}}>{props.price}</div>
                <div>{props.remain}</div>
            </Card>
        </div>
    )
};




export default Movie;