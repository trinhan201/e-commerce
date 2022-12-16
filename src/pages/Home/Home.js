import { useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '~/components/Button';
import config from '~/config';

import { product, sliderBanner1, sliderBanner2, sliderBanner3, sliderBanner4 } from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCartPlus, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function Home() {
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
            <div className={cx('new-arrival-section')}>
                <div className={cx('container')}>
                    <h1 className={cx('section-title')}>New Arrivals for you</h1>
                    <ul className={cx('product-list')}>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                        <li className={cx('product-item')}>
                            <div className={cx('product-img')}>
                                <img src={product} alt="" />
                                <div className={cx('to-product-detail')}>
                                    <Button primary to={config.routes.product}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('product-info')}>
                                <NavLink to={config.routes.product}>
                                    <h3 className={cx('product-name')}>Product name</h3>
                                </NavLink>
                                <p className={cx('product-price')}>$775.00</p>
                                <div className={cx('product-rating')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                </div>
                                <div className={cx('add-cart-btn')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('discount-section')}></div>
        </>
    );
}

export default Home;
