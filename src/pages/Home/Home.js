import { useState, useEffect, useRef } from 'react';
import productData from '~/data';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactStars from 'react-rating-stars-component';

import Button from '~/components/Button';
import config from '~/config';

import { sliderBanner1, sliderBanner2, sliderBanner3, sliderBanner4 } from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function Home() {
    //Product data
    const productNew = productData.filter((item) => {
        return item.productTag === 'New';
    });
    const productSaleOff = productData.filter((item) => {
        return item.productTag === 'SaleOff';
    });

    // Time countdown
    const [timeDays, setTimeDays] = useState('00');
    const [timeHours, setTimeHours] = useState('00');
    const [timeMinutes, setTimeMinutes] = useState('00');
    const [timeSeconds, setTimeSeconds] = useState('00');

    let interval = useRef();

    const startTimers = () => {
        const countdownDate = new Date('January 20, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        const timeId = interval.current;
        startTimers();
        return () => {
            clearInterval(timeId);
        };
    }, []);

    // Slider
    const slider1 = useRef();
    const next = () => {
        slider1.current.slickNext();
    };
    const previous = () => {
        slider1.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    return (
        <>
            <div className={cx('slider')}>
                <Slider ref={(slider) => (slider1.current = slider)} {...settings}>
                    <div className={cx('slider-img')}>
                        <img src={sliderBanner1} alt="" />
                        <div className={cx('slider-text')}>
                            <h1>Men's eyewear</h1>
                            <p>Cool summer sale 50% off</p>
                            <Button className={cx('slider-btn')} to="/product" medium primary>
                                SHOP NOW
                            </Button>
                        </div>
                    </div>
                    <div className={cx('slider-img')}>
                        <img src={sliderBanner2} alt="" />
                        <div className={cx('slider-text')}>
                            <h1>Women's eyewear</h1>
                            <p>Want to Look Your Best?</p>
                            <Button className={cx('slider-btn')} to="/product" medium primary>
                                SHOP NOW
                            </Button>
                        </div>
                    </div>
                    <div className={cx('slider-img')}>
                        <img src={sliderBanner3} alt="" />
                        <div className={cx('slider-text')}>
                            <h1>Men's eyewear</h1>
                            <p>Cool summer sale 50% off</p>
                            <Button className={cx('slider-btn')} to="/product" medium primary>
                                SHOP NOW
                            </Button>
                        </div>
                    </div>
                    <div className={cx('slider-img')}>
                        <img src={sliderBanner4} alt="" />
                        <div className={cx('slider-text')}>
                            <h1>Women's eyewear</h1>
                            <p>Want to Look Your Best?</p>
                            <Button className={cx('slider-btn')} to="/product" medium primary>
                                SHOP NOW
                            </Button>
                        </div>
                    </div>
                </Slider>
                <div className={cx('prev-slide')} onClick={previous}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className={cx('next-slide')} onClick={next}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('product-section')}>
                    <div className={cx('new-arrival-section')}>
                        <h1 className={cx('section-title')}>New Arrivals for you</h1>
                        <ul className={cx('product-list')}>
                            {productNew.map((item) => (
                                <li
                                    key={item.id}
                                    className={
                                        item.isSoldOut === true ? cx('product-item', 'sold-out') : cx('product-item')
                                    }
                                >
                                    <div className={cx('product-img')}>
                                        <img src={item.productImg} alt="" />
                                        {item.isTag === true ? (
                                            item.productTag === 'New' ? (
                                                <span className={cx('product-tag', 'new-tag')}>{item.productTag}</span>
                                            ) : (
                                                <span className={cx('product-tag', 'discount-tag')}>
                                                    {item.productDiscount} off
                                                </span>
                                            )
                                        ) : (
                                            <span className={cx('product-tag')}></span>
                                        )}
                                        <div className={cx('to-product-detail')}>
                                            <Button primary to={config.routes.product}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('product-info')}>
                                        <NavLink to={config.routes.product}>
                                            <h3 className={cx('product-name')}>{item.productName}</h3>
                                        </NavLink>
                                        <p className={cx('product-price')}>${item.productPrice}</p>
                                        <div className={cx('product-rating')}>
                                            <ReactStars size={20} value={item.productReview} edit={false} />
                                        </div>
                                        <div className={cx('add-cart-btn')}>
                                            <FontAwesomeIcon icon={faCartPlus} />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('discount-section')}>
                        <h1 className={cx('section-title')}>Sale Off</h1>
                        <ul className={cx('product-list')}>
                            {productSaleOff.map((item) => (
                                <li
                                    key={item.id}
                                    className={
                                        item.isSoldOut === true ? cx('product-item', 'sold-out') : cx('product-item')
                                    }
                                >
                                    <div className={cx('product-img')}>
                                        <img src={item.productImg} alt="" />
                                        {item.isTag === true ? (
                                            item.productTag === 'New' ? (
                                                <span className={cx('product-tag', 'new-tag')}>{item.productTag}</span>
                                            ) : (
                                                <span className={cx('product-tag', 'discount-tag')}>
                                                    {item.productDiscount} off
                                                </span>
                                            )
                                        ) : (
                                            <span className={cx('product-tag')}></span>
                                        )}
                                        <div className={cx('to-product-detail')}>
                                            <Button primary to={config.routes.product}>
                                                <FontAwesomeIcon icon={faEye} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('product-info')}>
                                        <NavLink to={config.routes.product}>
                                            <h3 className={cx('product-name')}>{item.productName}</h3>
                                        </NavLink>
                                        <p className={cx('product-price')}>
                                            <span>${item.productPrice}</span>$
                                            {item.productPrice -
                                                Math.round(item.productPrice * (item.productDiscount / 100))}
                                        </p>
                                        <div className={cx('product-rating')}>
                                            <ReactStars size={20} value={item.productReview} edit={false} />
                                        </div>
                                        <div className={cx('add-cart-btn')}>
                                            <FontAwesomeIcon icon={faCartPlus} />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('banner-sale-time')}>
                <div className={cx('banner-mid')}></div>
                <div className={cx('sale-time-content')}>
                    <h2 className={cx('sale-time-title')}>Summer Flash sale</h2>
                    <div className={cx('sale-time-countdown')}>
                        <div className={cx('days-countdown')}>
                            <p>{timeDays}</p>
                            <span>Days</span>
                        </div>
                        <div className={cx('hours-countdown')}>
                            <p>{timeHours}</p>
                            <span>Hours</span>
                        </div>
                        <div className={cx('minutes-countdown')}>
                            <p>{timeMinutes}</p>
                            <span>Minutes</span>
                        </div>
                        <div className={cx('seconds-countdown')}>
                            <p>{timeSeconds}</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
