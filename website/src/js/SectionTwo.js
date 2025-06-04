import React, { useEffect, useRef, useState } from 'react';
import { FaPeopleCarry } from 'react-icons/fa';
import '../css/SectionTwo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faGlobe, faHandshake, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'; // pick your icon

const SectionTwo = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const teamRef = useRef(null);
    const visaRef = useRef(null);
    const processRef = useRef(null);
    const successRef = useRef(null);
    const [isvisible2, setIsVisible2] = useState(false);
    const [isvisible3, setIsVisible3] = useState(false);
    const [isvisible4, setIsVisible4] = useState(false);
    const sectRef = useRef(null)
    const [section, setSection] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setSection(entry.isIntersecting)
            },
            {
                root: null,
                threshold: 0.2
            }
        )

     if(sectRef.current){
        observer.observe(sectRef.current)
     }

     return ()=>{
         if (sectRef.current) {
             observer.unobserve(sectRef.current)
         }
     }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible4(entry.isIntersecting)
            },
            {
                root: null,
                threshold: 0.2
            }
        );

        if (successRef.current) {
            observer.observe(successRef.current)
        }

        return () => {
            if (successRef.current) {
                observer.unobserve(successRef.current)
            }

        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount4((prevCount4) => {
                if (prevCount4 === 85) {
                    clearInterval(interval)
                    return 85
                } else {
                    return (prevCount4 + 1)
                }

            })
        }, 70);
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible3(entry.isIntersecting)
            },
            {
                root: null,
                threshold: 0.2
            }
        )

        if (processRef.current) {
            observer.observe(processRef.current)
        }

        return () => {
            if (processRef.current) {
                observer.unobserve(processRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount3((prevCount3) => {
                if (prevCount3 === 4.9) {
                    clearInterval(interval)
                    return 4.9
                } else {
                    return + (prevCount3 + 0.1).toFixed(1)
                }
            })


        }, 100)
        return () => clearInterval(interval)
    }, [])


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible2(entry.isIntersecting)
            }, {
            root: null,
            threshold: 0.2
        }
        )

        if (visaRef.current) {
            observer.observe(visaRef.current);
        }

        return () => {
            if (visaRef.current) {
                observer.unobserve(visaRef.current)
            }
        }
    }, [])


    useEffect(() => {
        const interval = setInterval(() => {
            setCount2((prevCount2) => {
                if (prevCount2 === 50) {
                    clearInterval(interval)
                    return 50
                } else {
                    return (prevCount2 + 1)
                }
            })
        }, 100);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                root: null,
                threshold: 0.2,
            }
        );

        if (teamRef.current) {
            observer.observe(teamRef.current);
        }

        return () => {
            if (teamRef.current) {
                observer.unobserve(teamRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 377) {
                    clearInterval(interval);
                    return 377;
                }
                return prevCount + 1;
            });
        }, 10);


        return () => clearInterval(interval);
    }, []);

    return (
        <section 
        className='article-two-container'>
            <div className='background-overlay'></div>

            <div
                ref={sectRef}
            className={`content ${section ? 'show' :'hide'}`}>
                <div ref={visaRef} className='icon-parent'>
                    <i className='icon'>
                        <FontAwesomeIcon icon={faUser} />
                    </i>
                    <div className="icon-content">
                        <h4>VISA CATEGORIES</h4>
                        <p>{count2}+</p>
                    </div>
                </div>

                <div ref={teamRef} className='icon-parent'>
                    <i className='icon'>
                        <FontAwesomeIcon icon={faGlobe} />
                    </i>
                    <div className="icon-content">
                        <h4>SUCCESS RATES</h4>
                        <p>{count}+</p>
                    </div>
                </div>
                <div ref={processRef} className='icon-parent'>
                    <i className='icon'>
                        <FontAwesomeIcon icon={faHandshake} />
                    </i>
                    <div className="icon-content">
                        <h4>VISA PROCESS</h4>
                        <p>{count3}k</p>
                    </div>

                </div>
                <div ref={successRef} className='icon-parent'>
                    <i className='icon'>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                    </i>
                    <div className='icon-content'>
                        <h4>SUCCESS RATES</h4>
                        <p>{count4}%</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SectionTwo;
