import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../css/SectionSix.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import testimonial1 from '../img/testimonial-1.jpg';
import testimonial2 from '../img/testimonial-2.jpg';
import testimonial3 from '../img/testimonial-3.jpg'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SectionSix = () => {
  const [article1, setArticle1] = useState(false)
  const [article2, setArticle2] = useState(false);;
  const article1Ref = useRef(null);
  const article2Ref = useRef(null);
  const [article3, setArticle3] = useState(0)

  const array = [
    {
      text: "   Lorem ipsum dolor sit amet consectur, adipisicing elit. optio officis blanditiis quasi fagiut sapiente,",
      id: 1,
      star: 5,
      img: testimonial2,
      textH4: "Mr Jane Mary",
      textp: "Public Finance Manager"
    },
    {
      text: "   Lorem ipsum dolor sit amet consectur, adipisicing elit. optio officis blanditiis quasi fagiut sapiente,",
      id: 2,
      star: 5,
      img: testimonial1,
      textH4: "Madam Joy",
      textp: "Banker"
    },
    {
      text: "   Lorem ipsum dolor sit amet consectur, adipisicing elit. optio officis blanditiis quasi fagiut sapiente,",
      id: 3,
      star: 4,
      img: testimonial3,
      textH4: "Sir John Max",
      textp: "Politician"
    },
  ];



  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setArticle2(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.1
      }
    )
    if (article2Ref.current) {
      observer.observe(article2Ref.current)
    }


    return ()=>{
      if (article2Ref.current) {
        observer.unobserve(article2Ref.current)
      }
  
    }
  }, [])

  useEffect(() => {
    const obserer = new IntersectionObserver(
      ([entry]) => {
        setArticle1(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.1
      }
    )

    if (article1Ref.current) {
      obserer.observe(article1Ref.current)
    }

    return () => {
      if (article1Ref.current) {
        obserer.unobserve(article1Ref.current)
      }
    }
  }, [])

  return (
    <section>
      <article ref={article1Ref}
        className={`chooseUs ${article1 ? "show" : "hide"}`}
      >
        <article className='article1'>
          <div className="colors">
            <div className='blue'></div>
            <div className='red'></div>
          </div>
          <h5>OUR CLIENTS REVIEWS</h5>
          <div className="colors">
            <div className='blue2'></div>
            <div className='red'></div>
          </div>
        </article>
        <article
          className='article2'
        >
          <h1>
            What Our Client Say
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officiis blanditiis quasi fugiat sapiente, provident ab ea impedit ex qui similique assumenda voluptatibus dolore sequi molestias nisi consectetur nam veritatis.
          </p>
        </article>
      </article>


      <article
        className={`section6-article3 ${article2 ? 'show': 'hide'}`}
        ref={article2Ref}
      >

        <div className="section6-article3-wrapper"

        >
          {array.map((items, idx) => (
            <div
              className='section6-article3-container'
              key={items.id}
            >
              <div className="section6-article3-parent">


                <div className="section6-article3-part1">
                  <p>{items.text}</p>
                  {[...Array(items.star)].map((index) => (
                    <FontAwesomeIcon icon={faStar} className='section6-article3-icon' key={index} />
                  ))}
                </div>

                <div className="section6-article3-part2">
                  <img src={items.img} alt="" />
                  <div>
                    <h4>{items.textH4}</h4>
                    <p>{items.textp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>


    </section>
  )
}

export default SectionSix