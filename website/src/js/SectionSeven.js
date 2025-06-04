import React from 'react'
import '../css/SectionSeven.css'
import training1 from '../img/training-1.jpg'
import training2 from '../img/training-2.jpg'
import training3 from '../img/training-3.jpg'
import training4 from '../img/training-4.jpg'
import { useState, useEffect, useRef } from 'react'
const SectionSeven = () => {
  const [article1, setArticle1] = useState(false)
  const [article2, setArticle2] = useState(false);
  const articleRef2= useRef(null);
   const article1Ref = useRef(null);

   useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        setArticle2(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.2
      }
    )

    if(articleRef2.current){
      observer.observe(articleRef2.current)
    }

    return()=>{
      if(articleRef2.current){
        observer.unobserve(articleRef2.current)
      }
    }
   },[])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setArticle1(entry.isIntersecting)
      }, {
      root: null,
      threshold: 0.2
    }
    )

    if (article1Ref.current) {
      observer.observe(article1Ref.current)
    }

    return () => {
      if (article1Ref.current) {
        observer.unobserve(article1Ref.current)
      }

    }
  }, [])

  return (
    <section
      className='section7'
    >
      <article
        ref={article1Ref}
        className={`article11  ${article1 ? ' show' : 'hide'}`}>
        <article className='article1'>
          <div className="colors">
            <div className='blue'></div>
            <div className='red'></div>
          </div>
          <h5>VISA CATEGORIES</h5>
          <div className="colors">
            <div className='blue2'></div>
            <div className='red'></div>
          </div>
        </article>
        <article
          className='article2'
        >
          <h1>
            Enabling Your Immigration Successfully
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officiis blanditiis quasi fugiat sapiente, provident ab ea impedit ex qui similique assumenda voluptatibus dolore sequi molestias nisi consectetur nam veritatis.
          </p>
        </article>
      </article>
      <article 
      ref={articleRef2}
      className={`section7-part2 ${article2 ? 'show' : 'hide'} `}>
        <article className='section7-article3-container'>
          <div className="section7-article3-card">
            <div className="section7-article3-wrapper"></div>
            <div className="section7-article3-card-content">
              <img src={training1} alt="" />
            </div>
            <div className="section7-article3-card-text">
              <h1>TOEFL</h1>
              <h1>Coaching</h1>
            </div>
            <div className="section7-article3-card-text-display">
              <h1>
                TOEFH COACHING
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </article>
        <article className='section7-article3-container'>
          <div className="section7-article3-card">
            <div className="section7-article3-wrapper"></div>
            <div className="section7-article3-card-content">
              <img src={training2} alt="" />
            </div>
            <div className="section7-article3-card-text">
              <h1>TOEFL</h1>
              <h1>Coaching</h1>
            </div>
            <div className="section7-article3-card-text-display">
              <h1>
                TOEFH COACHING
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </article>
        <article className='section7-article3-container'>
          <div className="section7-article3-card">
            <div className="section7-article3-wrapper"></div>
            <div className="section7-article3-card-content">
              <img src={training3} alt="" />
            </div>
            <div className="section7-article3-card-text">
              <h1>TOEFL</h1>
              <h1>Coaching</h1>
            </div>
            <div className="section7-article3-card-text-display">
              <h1>
                TOEFH COACHING
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </article>
        <article className='section7-article3-container'>
          <div className="section7-article3-card">
            <div className="section7-article3-wrapper"></div>
            <div className="section7-article3-card-content">
              <img src={training4} alt="" />
            </div>
            <div className="section7-article3-card-text">
              <h1>TOEFL</h1>
              <h1>Coaching</h1>
            </div>
            <div className="section7-article3-card-text-display">
              <h1>
                TOEFH COACHING
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </article>
      </article>
    </section>
  )
}

export default SectionSeven