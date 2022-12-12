import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './About.module.scss';

import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { about } from '~/assets/img';

const cx = classNames.bind(styles);
function About() {
    return (
        <>
            <div className={cx('about-wrapper')}></div>
            <div className={cx('about-banner')}></div>
            <div className={cx('about-shop-wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('about-shop-field')}>
                        <div className={cx('about-left-side')}>
                            <h1 className={cx('about-title')}>
                                We Work <span>for your best Success</span>
                            </h1>
                            <p className={cx('about-desc')}>
                                Consectetur adipiscing elit. Aliquam sit amet efficitur tortor.Uspendisse efficitur orci
                                urna. In et augue ornare, tempor massa in, luctus sapien.
                            </p>
                            <ul className={cx('about-list')}>
                                <li className={cx('about-item')}>
                                    <span className={cx('about-icon')}>
                                        <FontAwesomeIcon icon={faSquareCheck} />
                                    </span>{' '}
                                    Ut enim ad minim veniam
                                </li>
                                <li className={cx('about-item')}>
                                    <span className={cx('about-icon')}>
                                        <FontAwesomeIcon icon={faSquareCheck} />
                                    </span>{' '}
                                    Quis nostrud exercitation ullamco laboris
                                </li>
                                <li className={cx('about-item')}>
                                    <span className={cx('about-icon')}>
                                        <FontAwesomeIcon icon={faSquareCheck} />
                                    </span>{' '}
                                    Nisi ut aliquip ex ea commodo consequat
                                </li>
                            </ul>
                            <Button className={cx('about-btn')} primary>
                                VIEW OUR PRODUCT
                            </Button>
                        </div>
                        <div className={cx('about-right-side')}>
                            <img className={cx('about-img')} src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('about-customer-wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('about-customer-field')}>
                        <div className={cx('about-customer-header')}>
                            <h1 className={cx('about-customer-title')}>
                                Our <span>Customer</span> Says
                            </h1>
                            <p className={cx('about-customer-desc')}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
                                eaque ipsa quae ab illo inventore.
                            </p>
                        </div>
                        <div className={cx('about-customer-body')}>
                            <div className={cx('about-customer-card')}>
                                <p>
                                    <span>"</span>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit."
                                </p>
                                <div className={cx('customer-info')}>
                                    <div className={cx('customer-avatar')}>
                                        <img
                                            src="https://demo.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/testi2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('customer-name')}>
                                        <h3>Full name</h3>
                                        <p>Caption here</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('about-customer-card')}>
                                <p>
                                    <span>"</span>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit."
                                </p>
                                <div className={cx('customer-info')}>
                                    <div className={cx('customer-avatar')}>
                                        <img
                                            src="https://demo.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/testi2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('customer-name')}>
                                        <h3>Full name</h3>
                                        <p>Caption here</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('about-customer-card')}>
                                <p>
                                    <span>"</span>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit."
                                </p>
                                <div className={cx('customer-info')}>
                                    <div className={cx('customer-avatar')}>
                                        <img
                                            src="https://demo.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/testi2.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx('customer-name')}>
                                        <h3>Full name</h3>
                                        <p>Caption here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
