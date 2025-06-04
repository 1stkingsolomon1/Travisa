import React from 'react'
import { useState, useRef, useEffect } from 'react'
import '../css/SectionEight.css';
import office1 from '../img/office-1.jpg'
import office2 from '../img/office-2.jpg'
import office3 from '../img/office-3.jpg'
import office4 from '../img/office-4.jpg'

const SectionEight = () => {
    const [article1, setArticle1] = useState(false)
    const article1Ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setArticle1(entry.isIntersecting)
            },
            {
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
        <section>
            <article
                ref={article1Ref}
                className={`article11  ${article1 ? ' show' : 'hide'}`}>
                <article className='article1'>
                    <div className="colors">
                        <div className='blue'></div>
                        <div className='red'></div>
                    </div>
                    <h5>WORLDWIDE OFFICES</h5>
                    <div className="colors">
                        <div className='blue2'></div>
                        <div className='red'></div>
                    </div>
                </article>
                <article
                    className='article2'
                >
                    <h1>
                        Explore Our Office Worldwide
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officiis blanditiis quasi fugiat sapiente, provident ab ea impedit ex qui similique assumenda voluptatibus dolore sequi molestias nisi consectetur nam veritatis.
                    </p>
                </article>
            </article>
            <article
                className='section8-article3-card'
            >
                <div className="section8-article3-card-content">
                    <div className="section-article3-card-img">
                        <img src={office2} alt="" />
                    </div>
                    <div className="section8-article3-card-text">
                        <h3>
                            Austrailia
                        </h3>
                        <p>
                            +1234567890
                        </p>
                        <h6>
                            travisa @example.com
                        </h6>

                        <address>
                            Roots Terrace Los Angeles 90010 United States of America
                            123, First Floor, 123 st
                        </address>
                    </div>
                </div>
                <div className="section8-article3-card-content">
                    <div className="section-article3-card-img">
                        <img src={office3} alt="" />
                    </div>
                    <div className="section8-article3-card-text">
                        <h3>
                            Austrailia
                        </h3>
                        <p>
                            +1234567890
                        </p>
                        <h6>
                            travisa @example.com
                        </h6>

                        <address>
                            Roots Terrace Los Angeles 90010 United States of America
                            123, First Floor, 123 st
                        </address>
                    </div>
                </div>
                <div className="section8-article3-card-content">
                    <div className="section-article3-card-img">
                        <img src={office1} alt="" />
                    </div>
                    <div className="section8-article3-card-text">
                        <h3>
                            Austrailia
                        </h3>
                        <p>
                            +1234567890
                        </p>
                        <h6>
                            travisa @example.com
                        </h6>

                        <address>
                            Roots Terrace Los Angeles 90010 United States of America
                            123, First Floor, 123 st
                        </address>
                    </div>
                </div>
                <div className="section8-article3-card-content">
                    <div className="section-article3-card-img">
                        <img src={office4} alt="" />
                    </div>
                    <div className="section8-article3-card-text">
                        <h3>
                            Austrailia
                        </h3>
                        <p>
                            +1234567890
                        </p>
                        <h6>
                            travisa @example.com
                        </h6>

                        <address>
                            Roots Terrace Los Angeles 90010 United States of America
                            123, First Floor, 123 st
                        </address>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default SectionEight