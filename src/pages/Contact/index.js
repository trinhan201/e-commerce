import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Contact() {
    return (
        <>
            <div className={cx('contact-banner')}></div>
            <div className={cx('page-path')}>
                <a href="/">Home</a> <span>{'>'}</span> Contact Us
            </div>
            <div className={cx('container')}>
                <div className={cx('contact-field')}>
                    <div className={cx('contact-info')}>
                        <h3 className={cx('contact-info-title')}>Contact Info</h3>
                        <p className={cx('contact-info-desc')}>
                            We enjoy discussing new projects and design challenges. Please share as much info, as
                            possible so we can get the most out of our first catch-up.
                        </p>
                        <ul className={cx('contact-info-list')}>
                            <li className={cx('contact-info-item')}>
                                <div className={cx('contact-info-icon')}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <span>District 5, Ho Chi Minh</span>
                            </li>
                            <li className={cx('contact-info-item')}>
                                <div className={cx('contact-info-icon')}>
                                    <FontAwesomeIcon icon={faMobile} />
                                </div>
                                <a href="tel:+84393784963">+84393784963</a>
                            </li>
                            <li className={cx('contact-info-item')}>
                                <div className={cx('contact-info-icon')}>
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                </div>
                                <a href="mailto:pashop123@gmail.com">pashop123@gmail.com</a>
                            </li>
                        </ul>
                        <div className={cx('contact-social')}>
                            <h3>Follow Us</h3>
                            <div className={cx('contact-social-list')}>
                                <div className={cx('contact-social-item')}>
                                    <a href="!#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </div>
                                <div className={cx('contact-social-item')}>
                                    <a href="!#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </div>
                                <div className={cx('contact-social-item')}>
                                    <a href="!#">
                                        <FontAwesomeIcon icon={faGooglePlusG} />
                                    </a>
                                </div>
                                <div className={cx('contact-social-item')}>
                                    <a href="!#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('contact-form')}>
                        <form>
                            <input type="text" name="name" placeholder="Your Name*" required />
                            <input type="email" name="email" placeholder="Your Email*" required />
                            <input type="text" name="subject" placeholder="Subject*" required />
                            <input type="text" name="url" placeholder="Website URL*" required />
                            <textarea
                                cols="30"
                                rows="4"
                                type="text"
                                name="message"
                                placeholder="Type your message here*"
                                required
                            />
                            <Button primary className={cx('contact-submit-btn')}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={cx('contact-map')}>
                <iframe
                    title="Contact Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.023456349823!2d106.69758091428672!3d10.732674162935794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b2747a81a3%3A0x33c1813055acb613!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUw7RuIMSQ4bupYyBUaOG6r25n!5e0!3m2!1svi!2s!4v1670738143272!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}

export default Contact;
