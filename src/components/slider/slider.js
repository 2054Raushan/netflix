import React from "react";
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}



  
const Slider = () => {
    return(
        <div>
            <Carousel afterChange={onChange}>
                <div>
                <img src="./images/joker1.jpg" className="slider-img" />
                </div>
                <div>
                <img src="./images/joker1.jpg" className="slider-img" />
                </div>
                <div>
                <img src="./images/small.jpg" className="slider-img" />
                </div>
                <div>
                <img src="./images/joker1.jpg" className="slider-img" />
                </div>
            </Carousel>
        </div>
    )
};


export default Slider;

