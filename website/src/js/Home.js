import React, { useEffect, useState } from 'react'
import Carousel1 from '../img/carousel-1.jpg'
import Carousel2 from '../img/carousel-2.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import '../css/Carousel.css'

const Home = () => {
    const [imgState, setImgState] = useState(0)
    const [loadText, setLoadText] = useState(false)

    const carouselImgs = [
        {
            id: 1,
            h3: "SOLUTION FOR ALL TYPES OR VISA",
            h1: "Immigration Process Start Here!",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt soluta inventore!",
            img: Carousel1,
            button: "More Details"
        },
        {
            id: 2,
            h3: "SOLUTION FOR ALL TYPES OR VISA",
            h1: "Best Visa Immigration Services",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt soluta inventore!",
            img: Carousel2,
            button: "More Details"
        },
    ];


    useEffect(() => {
       
        const timeout = setTimeout(() => {
            setLoadText(true); 
        }, 3000); 
        return () => clearTimeout(timeout);
    }, []);

   
    useEffect(() => {
        const interval = setInterval(() => {
            setImgState((prev) => (prev + 1) % carouselImgs.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    function handlePrevBtn(){
        setImgState((prev)=> (prev - 1 + carouselImgs.length)%carouselImgs.length)
    }

    function handNextBtn(){
        setImgState((prev)=>(prev + 1)%carouselImgs.length)
    }
    return (
        <header>
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${imgState * 100}%)` }}
                >
                    {carouselImgs.map((item, idx) => (
                        <div key={item.id} className="carousel-slide">
                            <div className="carousel-img-parent">
                                <img src={item.img} alt="" className="carousel-img" />
                                <div className="carousel-slider"></div>
                                <div className={`carousel-text ${loadText ? 'show-text' : ''}`}>
                                    <h3>{item.h3}</h3>
                                    <h1>{item.h1}</h1>
                                    <p>{item.p}</p>
                                    <button className='carousel-button'>{item.button}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className='arrow-left'
                onClick={handlePrevBtn}
                ><FaArrowLeft /></button>
                <button onClick={handNextBtn}
                className='arrow-right'><FaArrowRight /></button>
            </div>
        </header>
    )
}

export default Home;
