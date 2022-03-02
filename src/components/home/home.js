import React, {useState , useEffect} from 'react';
import {Row , Col , Card , Button} from 'antd';
import Movie from '../shows/shows';
import './home.css';

const Home = () => {
    const [width, setWidth] = useState(null);


    const UpcomingMovieData =  [
        {
            title : 'Joker',
            text: 'I am testing props',
            imgUrl: './images/joker1.jpg',
        },
        {
            title : 'Badsah',
            text: 'I am testing props',
            imgUrl: './images/joker1.jpg',
        },
        {
            title : 'Jason Bourne',
            text: 'I am testing props',
            imgUrl: './images/joker1.jpg',
        },
        {
            title : 'Tripple Frontier',
            text: 'I am testing props',
            imgUrl: './images/joker1.jpg',
    
        },
        {
            title : 'Tears of the Sun',
            text: 'I am testing props',
            imgUrl: './images/joker1.jpg',
    
        },
        {
            title : 'Tripple Frontier',
            text: 'I am testing props',
            imgUrl: './images/joker1.jpg',
    
        },
    
    ];
    
    
    const LastRelease = [
        {
            title : 'Hera Feri',
            text: 'I am testing props',
            imgUrl: './images/small.jpg',
            date : '15th Jan 2021'
    
        },
        {
            title : 'Fir Hera Feri',
            text: 'I am testing props',
            imgUrl: './images/small.jpg',
            date : '10th Jan 2021'
    
        },
        {
            title : 'Again Hera Feri',
            text: 'I am testing props',
            imgUrl: './images/small.jpg',
            date : '5th Jan 2021'
    
        },
        {
            title : 'Hera Feri',
            text: 'I am testing props',
            imgUrl: './images/small.jpg',
            date : '15th Jan 2021'
    
        },
        {
            title : 'Fir Hera Feri',
            text: 'I am testing props',
            imgUrl: './images/small.jpg',
            date : '10th Jan 2021'
    
        },
        {
            title : 'Again Hera Feri',
            text: 'I am testing props',
            imgUrl: './images/small.jpg',
            date : '5th Jan 2021'
    
        },
    ];

    const ContinueWatching = [
        {
            title : 'Fir Hera Feri',
            imgUrl: './images/joker1.jpg',
            remain : "2.5 hr remaining",
    
        },
        {
            title : 'Again Hera Feri',
            imgUrl: './images/small.jpg',
            remain : '1.3 hr remaining',
    
        },
        {
            title : 'Again Hera Feri',
            imgUrl: './images/joker1.jpg',
            remain : '1.3 hr remaining',
    
        },
    ];


    const Hollywood = [
        {
            title : 'Fir Hera Feri',
            imgUrl: './images/joker1.jpg',
            price: 'paid',
            remain : "2.5 hr remaining",
    
        },
        {
            title : 'Again Hera Feri',
            imgUrl: './images/small.jpg',
            price: 'free',
            remain : '1.3 hr remaining',
    
        },
        {
            title : 'Again Hera Feri',
            imgUrl: './images/joker1.jpg',
            price: 'free',
            remain : '1.3 hr remaining',
    
        },
        {
            title : 'Fir Hera Feri',
            imgUrl: './images/joker1.jpg',
            price: 'paid',
            remain : "2.5 hr remaining",
    
        },
        {
            title : 'Again Hera Feri',
            imgUrl: './images/small.jpg',
            price: 'paid',
            remain : '1.3 hr remaining',
    
        },
        {
            title : 'Again Hera Feri',
            imgUrl: './images/joker1.jpg',
            price: 'paid',
            remain : '1.3 hr remaining',
    
        },
        
    ];
    


   

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }, []);

    return(
        <div>
            <div>
                <div className='movie-title'>Upcoming Cinemas</div>
                {width && width < 767 ? 
                <div className='slider'>
                    {UpcomingMovieData.map((conf, index) => {
                            return <div key={index} className='padding-5 slide'>
                        <Movie 
                            imgUrl={conf.imgUrl} 
                            title={conf.title} 
                        />
                    </div>
                    })}
                </div>
                :
                <Row>
                    <Col md={24} className='padding-5'>
                        
                    </Col>
                    {UpcomingMovieData.map((conf, index) => {
                            return <Col key={index} md={4} className='padding-5'>
                        <Movie 
                            imgUrl={conf.imgUrl} 
                            title={conf.title} 
                        />
                    </Col>
                    })}
                </Row>
                }
            </div>
            


            <div>
            <div className='movie-title'>Last Release Cinemas</div>
            {width && width < 767 ? 
            <div className='slider'>
                {LastRelease.map((conf, index) => {
                        return <div key={index} className='padding-5 slide'>
                    <Movie 
                        imgUrl={conf.imgUrl} 
                        title={conf.title} 
                        date = {conf.date}
                    />
                </div>
                })}
            </div>
            :
            <Row>
                {LastRelease.map((conf, index) => {
                        return <Col key={index} md={4} className='padding-5'>
                    <Movie 
                        imgUrl={conf.imgUrl} 
                        title={conf.title} 
                        date = {conf.date}
                    />
                </Col>
                })}
            </Row>
            }
            </div>
        

            <div>
                <div className='movie-title'>Continue Watching</div>
                {width && width < 767 ? 
                    <div className="slider">
                        {ContinueWatching.map((conf, index) => {
                            return <div key={index} className='padding-5 slide'>
                        <Movie 
                            imgUrl={conf.imgUrl}
                            title={conf.title} 
                            remain = {conf.remain}
                        />
                    </div>
                    })}
                    </div>
                    :
                    <Row>
                    {ContinueWatching.map((conf, index) => {
                            return <Col key={index} md={8} className='padding-5'>
                        <Movie 
                            imgUrl={conf.imgUrl}
                            title={conf.title} 
                            remain = {conf.remain}
                        />
                    </Col>
                    })}
                </Row>
                }
            </div>
        
                <div>
                    <div className='movie-title'>Hollywood</div>
                    {width && width < 767 ? 
                        <div className='slider'>
                            {Hollywood.map((conf, index) => {
                                    return <div key={index} className='padding-5 slide'>
                                <Movie 
                                    imgUrl={conf.imgUrl}
                                    title={conf.title} 
                                    remain = {conf.remain}
                                    price = {conf.price}
                                />
                            </div>
                            })}
                        </div>
                        :
                        <Row>
                            {Hollywood.map((conf, index) => {
                                    return <Col key={index} md={4} className='padding-5'>
                                <Movie 
                                    imgUrl={conf.imgUrl}
                                    title={conf.title} 
                                    remain = {conf.remain}
                                    price = {conf.price}
                                />
                            </Col>
                            })}
                        </Row>
                    }
                </div>
        

            
        </div>
    )
};


export default Home;