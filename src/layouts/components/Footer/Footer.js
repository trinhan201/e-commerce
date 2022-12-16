import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faEnvelopeOpenText,
    faLocationDot,
    faMobile,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <>
            <div className={cx('newsletter')}>
                <div className={cx('container')}>
                    <div className={cx('newsletter-content')}>
                        <div className={cx('newsletter-text')}>
                            <h1>Newsletter</h1>
                            <p>Don't forget subscribe to give news of products</p>
                        </div>
                        <div className={cx('newsletter-form')}>
                            <input className={cx('newsletter-input')} type="email" placeholder="Email" />
                            <Button primary className={cx('newsletter-submit')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('container')}>
                    <div className={cx('footer-info')}>
                        <div className={cx('left-side')}>
                            <div className={cx('info-content')}>
                                <div className={cx('info-title')}>
                                    <h2>CONTACT</h2>
                                </div>
                                <ul className={cx('info-contact-list')}>
                                    <li>
                                        <div className={cx('contact-icon')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </div>
                                        <span>District 5, Ho Chi Minh</span>
                                    </li>
                                    <li>
                                        <div className={cx('contact-icon')}>
                                            <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                        </div>
                                        <a href="mailto:pashop123@gmail.com">pashop123@gmail.com</a>
                                    </li>
                                    <li>
                                        <div className={cx('contact-icon')}>
                                            <FontAwesomeIcon icon={faMobile} />
                                        </div>
                                        <a href="tel:+84393784963">+84393784963</a>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx('info-content')}>
                                <div className={cx('info-title')}>
                                    <h2>INFOMATION</h2>
                                </div>
                                <ul className={cx('info-link-list')}>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">About Us</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Contact Us</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Shortcodes</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">FAQ's</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Special Products</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('right-side')}>
                            <div className={cx('info-content')}>
                                <div className={cx('info-title')}>
                                    <h2>SHOP</h2>
                                </div>
                                <ul className={cx('info-link-list')}>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">New Arrivals</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Men</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Women</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Brands</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Trends</a>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx('info-content')}>
                                <div className={cx('info-title')}>
                                    <h2>PROFILE</h2>
                                </div>
                                <ul className={cx('info-link-list')}>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Home</a>
                                    </li>
                                    <li>
                                        <div className={cx('link-icon')}>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                        <a href="!#">Today's Deals</a>
                                    </li>
                                </ul>
                                <div className={cx('social-content')}>
                                    <h3>Follow Us</h3>
                                    <div className={cx('social-list')}>
                                        <div className={cx('social-item')}>
                                            <a href="!#">
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </a>
                                        </div>
                                        <div className={cx('social-item')}>
                                            <a href="!#">
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </a>
                                        </div>
                                        <div className={cx('social-item')}>
                                            <a href="!#">
                                                <FontAwesomeIcon icon={faGooglePlusG} />
                                            </a>
                                        </div>
                                        <div className={cx('social-item')}>
                                            <a href="!#">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-copyright')}>
                        <p>© 2022 PA Shop. All rights reserved. Design by An Trinh</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
