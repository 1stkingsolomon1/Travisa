


import React, { useState, useEffect, useRef } from 'react';
import '../css/SectionOne.css';
import About from '../img/about-2.png';
import About2 from '../img/about-3.jpg';
import {
  FaCheckCircle, FaPhone, FaPhoneAlt, FaPlane,
  FaSortNumericDown, FaStopCircle, FaTable
} from 'react-icons/fa';

const SectionOne = () => {
  const [displayContent, setDisplayContent] = useState(false);
  const [displaysection2, setDisplaySection2] = useState(false)
  const sectionRef = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setDisplayContent(entry.isIntersecting); // true = show, false = hide
      },
      {
        root: null, // viewport
        threshold: 0.2
        // 20% of section visible before showing
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  useEffect(() => {
const observer = new IntersectionObserver(
  ([entry])=>{
setDisplaySection2(entry.isIntersecting)
  },{
    root: null,
    threshold: 0.2
  }
)

if(section2Ref.current){
  observer.observe(section2Ref.current)
};

return()=>{
  if (section2Ref.current) {
    observer.observe(section2Ref.current)
  };
}
  }, [])

  return (
    <section

      className='section-one-container '
    >
      <div
        className='section-one-parent'>
        <div
          ref={sectionRef}
          className={`first-section ${displayContent ? 'show' : 'hide'}`}>
          <img className='about1' src={About} alt="" />
          <img className='about2' src={About2} alt="" />
        </div>
        <div
        ref={section2Ref}
        className={`second-section ${displaysection2 ? 'show' : 'hide'}`}>
          <div className='second-section-part-one'>
            <h4>ABOUT THE COMPANY</h4>
            <div className="colors">
              <div className='blue-color'></div>
              <div className='red-color'></div>
            </div>
          </div>

          <div className='second-section-part-two'>
            <h1>We're Trusted Immigration Consultant Agency.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aliquid voluptas vitae dicta! Aspernatur hic, accusamus assumenda illum...
            </p>
          </div>

          <div className='second-section-part-three'>
            <span className='third-part-span-one'>
              <i><FaStopCircle /></i>
              <strong>Best Immigration Resourse</strong>
            </span>
            <span className='third-part-span-two'>
              <i><FaPlane /></i>
              <strong>Return Visas Available</strong>
            </span>
          </div>

          <div className='second-section-part-four'>
            <div className='second-section-part-four1'>
              <div><FaSortNumericDown /></div>
              <div><FaPhone /></div>
              <p>Years of Experience</p>
            </div>

            <div className='second-section-part-four2'>
              <p><i><FaCheckCircle /></i> Offer 100% Genuine Assistance</p>
              <p><i><FaCheckCircle /></i> It's Faster & Reliable Execution</p>
              <p><i><FaCheckCircle /></i> Accurate & Expert Advice</p>
              <div className='second-section-part-four3'>
                <div>
                  <i className='icon1'><FaPhoneAlt /></i>
                  <i className='icon2'><FaTable /></i>
                </div>
                <div className='second-section-part-four-para'>
                  <p className='questions2'>Have any questions</p>
                  <p className='questions'>Free: +013 456 7890</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
