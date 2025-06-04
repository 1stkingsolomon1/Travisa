
import '../css/SectionFour.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBook, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect, useRef } from 'react';
const SectionFour = () => {

    const [section4, setSection4] = useState(false)
    const section4Ref = useRef(null);

    useEffect(()=>{
const observer = new IntersectionObserver(
    ([entry])=>{
        setSection4(entry.isIntersecting)
    },
    {
        root: null,
        threshold: 0.2
    }
)

if(section4Ref.current){
    observer.observe(section4Ref.current)
}

return () =>{

    if(section4Ref.current){
        observer.unobserve(section4Ref.current)
    }
} 
    },[])
  return (
    <section>
          <article className='article1'>
              <div className="colors">
                  <div className='blue'></div>
                  <div className='red'></div>
              </div>
              <h5>WHY CHOOSE US</h5>
              <div className="colors">
                  <div className='blue2'></div>
                  <div className='red'></div>
              </div>
          </article>
          <article
              className='article2'
          >
              <h1>
                  Offer Tailor Made Services That Our Client Requires
              </h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officiis blanditiis quasi fugiat sapiente, provident ab ea impedit ex qui similique assumenda voluptatibus dolore sequi molestias nisi consectetur nam veritatis.
              </p>
          </article>
          <article className={`section4-article3 ${section4 ? 'show' : 'hide'}`}
          ref={section4Ref}
          >
      <div className="section4-card">
        <div className="section4-card-img">
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="section4-card-text">
          <h3>Cost-Effective</h3>
          <p>Lorem, sit amet consectetur adipisicing elit soluta inventproe cum accusmus</p>
        </div>
      </div>

      <div className="section4-card">
        <div className="section4-card-img">
          <FontAwesomeIcon icon={faCcVisa} />
        </div>
        <div className="section4-card-text">
          <h3>Visa Assistance</h3>
          <p>Lorem, sit amet consectetur adipisicing elit soluta inventproe cum accusmus</p>
        </div>
      </div>

      <div className="section4-card">
        <div className="section4-card-img">
          <FontAwesomeIcon icon={faBook} />
        </div>
        <div className="section4-card-text">
          <h3>Faster Processing</h3>
          <p>Lorem, sit amet consectetur adipisicing elit soluta inventproe cum accusmus</p>
        </div>
      </div>

      <div className="section4-card">
        <div className="section4-card-img">
          <FontAwesomeIcon icon={faPeopleGroup} />
        </div>
        <div className="section4-card-text">
          <h3>Direct Interviews</h3>
          <p>Lorem, sit amet consectetur adipisicing elit soluta inventproe cum accusmus</p>
        </div>
      </div>
    </article>
    </section>
  )
}

export default SectionFour