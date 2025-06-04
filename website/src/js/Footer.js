import React from 'react';
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCashRegister, faLocationDot, } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebookF, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content1">
                    <h1>
                        Conatct Info
                    </h1>
                    <div className="footer-links1">
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>
                                123 Street, New York, Usa
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>
                                Info@example.com
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>
                                +01233456789
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCashRegister} />
                            <p>
                                +01234567890
                            </p>
                        </div>

                    </div>

                    <div className="footer-link2">
                        <div>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>
                <div className="footer-content2">
                    <div>
                        <h1>
                            Opening Time
                        </h1>

                        <h6>
                            Mon-Friday
                        </h6>
                        <p>
                            9:00am to 07:00pm
                        </p>
                        <h6>
                            Saturday
                        </h6>
                        <p>
                            10:00am to 05:00pm
                        </p>
                        <h6>
                            Vacation:
                        </h6>
                        <p>
                            All Sunday is Our Vacation
                        </p>
                    </div>

                </div>
                <div className="footer-content3">
                    <h1>
                        Our Services
                    </h1>
                    <p>
                        Business
                    </p>
                    <p>
                        Evaluation
                    </p>
                    <p>
                        Migrate
                    </p>
                    <p>
                        Study
                    </p>
                    <p>
                        Counselling
                    </p>
                    <p>
                        Work/Career
                    </p>
                </div>
                <div className="footer-content4">
                    <h1>
                        NewsLetter
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                        <br /> facere alias quaerat animi sapiente eligendi quisquam
                    </p>
<div className='input'>
                        <input type="text" name="text" id="text" placeholder='Enter Your Email' />
                        <label htmlFor="sign up">SignUp</label>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
