import React from 'react'
import '../css/SectionFive.css'
import india from '../img/india2.jpg'
import brazil from '../img/brazil1.jpg'
import Italy from '../img/italy4.jpg'
import usa from '../img/usa3.jpg'
import country1 from '../img/country-1.jpg'
import country2 from '../img/country-2.jpg'
import country3 from '../img/country-3.jpg'
import country4 from '../img/country-4.jpg'
import {useState, useEffect, useRef} from 'react'
const SectionFive = () => {
    const [article1, setArticle1] = useState(false);
    const [article2, setArticle2] = useState(false);
    const article2Ref = useRef(null)
    const article1Ref = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                setArticle1(entry.isIntersecting)
            },
            {
                root: null,
                threshold: 0.2
            }
        )

        if(article1Ref.current){
            observer.observe(article1Ref.current)
        }

        return ()=>{
            if(article1Ref.current){
                observer.unobserve(article1Ref.current)
            } 
        }
    },[])

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
setArticle2(entry.isIntersecting)
            }, {
                root: null,
                threshold: 0.2
            }
        )

        if(article2Ref.current){
            observer.observe(article2Ref.current)
        }

        return()=>{
            if(article2Ref.current){
                observer.unobserve(article2Ref.current)
            } 
        }
    },[])
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
          </article>

          <article 
          ref={article2Ref}
          className={`choose-content ${article2 ? "show" : "hise"}`}
          >
          <article className='article3-section5-container'>
<article className="article3-section5">
<div
className="article3-section5-card-content"
>
    <div className='article3-section5-card-img'>
        <div className='article3-section5-card-wrapper'></div>
<img className='country-name country' src={brazil}/>
<img className='country' src={country1}/>
    </div>
    <div className='article3-section5-card-text'>
<p>Brazil</p>
    </div>
</div>
</article>
<article className="article3-section5">
<div
className="article3-section5-card-content"
>
    <div className='article3-section5-card-img'>
        <div className='article3-section5-card-wrapper'></div>
<img className='country-name country' src={india}/>
<img className='country' src={country2}/>
    </div>
    <div className='article3-section5-card-text'>
<p>India</p>
    </div>
</div>
</article>
<article className="article3-section5">
<div
className="article3-section5-card-content"
>
    <div className='article3-section5-card-img'>
        <div className='article3-section5-card-wrapper'></div>
<img className='country-name country' src={Italy}/>
<img className='country' src={country3}/>
    </div>
    <div className='article3-section5-card-text'>
<p>Italy</p>
    </div>
</div>
</article>
<article className="article3-section5">
<div
className="article3-section5-card-content"
>
    <div className='article3-section5-card-img'>
        <div className='article3-section5-card-wrapper'></div>
<img className='country-name country' src={usa}/>
<img className='country' src={country4}/>
    </div>
    <div className='article3-section5-card-text'>
<p>Usa</p>
    </div>
</div>
</article>
</article>
</article>
    </section>
  )
}

export default SectionFive