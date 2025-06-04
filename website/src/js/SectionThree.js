import React, { useEffect, useRef, useState } from 'react'
import '../css/SectionThree.css'
import service from '../img/service-1.jpg'
import service2 from '../img/service-2.jpg'
import service3 from '../img/service-3.jpg'

const SectionThree = () => {
  const [text, setText] = useState(false);
  const sectRef = useRef(null);
  const [content, setContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setContent(entry.isIntersecting);
      }, {
      root: null,
      threshold: 0.1
    }
    )

    if (sectRef.current) {
      observer.observe(sectRef.current);
    }

    return () => {
      if (sectRef.current) {
        observer.unobserve(sectRef.current);
      }
    }
  }, [])

  return (
    <section className='section3'>
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

      <article 
      ref={sectRef}
        className={`article3 ${content ? 'show' : 'hide'}`}
      >
        <div className="card-parent">
          <div className="card-wrapper"></div>
          <div className="card-img">
            <img src={service2} alt="" />
          </div>
          <div className="card-text">
            <p className='pNone pNone1'>Job Visa</p>
            <div className="card-text-disNone">
              <p className='para1'>Job Visa</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quae eveniet ,
              <p className='para2'> Explore More</p>
            </div>
          </div>
        </div>
        <div className="card-parent card-parent2">
          <div className="card-wrapper"></div>
          <div className="card-img">
            <img src={service3} alt="" />
          </div>
          <div className="card-text">
            <p className='pNone pNone1'>Job Visa</p>
            <div className="card-text-disNone">
              <p className='para1'>Job Visa</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quae eveniet
              <p className='para2'> Explore More</p>
            </div>
          </div>
        </div>
        <div className="card-parent card-parent2">
          <div className="card-wrapper"></div>
          <div className="card-img">
            <img src={service} alt="" />
          </div>
          <div className="card-text">
            <p className='pNone pNone1'>Job Visa</p>
            <div className="card-text-disNone">
              <p className='para1'>Job Visa</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <p className='para2'> Explore More</p>
            </div>
          </div>
        </div>
        <div className="card-parent card-parent2">
          <div className="card-wrapper"></div>
          <div className="card-img">
            <img src={service} alt="" />
          </div>
          <div className="card-text">
            <p className='pNone pNone1'>Job Visa</p>
            <div className="card-text-disNone">
              <p className='para1'>Job Visa</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <p className='para2'> Explore More</p>
            </div>
          </div>
        </div>
        <div className="card-parent card-parent2">
          <div className="card-wrapper"></div>
          <div className="card-img">
            <img src={service2} alt="" />
          </div>
          <div className="card-text">
            <p className='pNone pNone1'>Job Visa</p>
            <div className="card-text-disNone">
              <p className='para1'>Job Visa</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quae eveniet
              <p className='para2'> Explore More</p>
            </div>
          </div>
        </div>
        <div className="card-parent card-parent2">
          <div className="card-wrapper"></div>
          <div className="card-img">
            <img src={service3} alt="" />
          </div>
          <div className="card-text">
            <p className='pNone pNone1'>Job Visa</p>
            <div className="card-text-disNone">
              <p className='para1'>Job Visa</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem quae eveniet
              <p className='para2'> Explore More</p>
            </div>
          </div>
        </div>

      </article>
    </section>
  )
}

export default SectionThree