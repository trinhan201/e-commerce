import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';
import productData from '~/data';
import Button from '~/components/Button';
import ReactStars from 'react-rating-stars-component';
import ProductItem from '../ProductItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavLink } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '~/components/Cart/cartSystem';

const cx = classNames.bind(styles);
function ProductDetail() {
    const [productQty, setProductQty] = useState(1);

    const { id } = useParams();
    const thisProduct = productData.find((item) => item.id === parseInt(id, 10));
    const product5Star = productData.filter((item) => {
        return item.productReview === 5;
    });
    const dispatch = useDispatch();

    const notify = () =>
        toast.success('Add to cart successfully!', {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    const handleSubmit = (product, quantity) => {
        dispatch(incrementByAmount({ product, quantity }));
        notify();
    };

    return (
        <>
            <div className={cx('product-detail-banner')}>
                <div className={cx('banner-mid')}></div>
                <div className={cx('page-path')}>
                    <NavLink to={config.routes.home}>Home</NavLink> <span>{'>'}</span>{' '}
                    <NavLink to={config.routes.product}>Products</NavLink> <span>{'>'}</span> {thisProduct.productName}
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('product-detail-wrapper')}>
                    <div className={cx('product-detail-img')}>
                        <img src={thisProduct.productImg} alt="" />
                    </div>
                    <div className={cx('product-detail-info')}>
                        <h1 className={cx('product-detail-name')}>{thisProduct.productName}</h1>
                        <p className={cx('product-detail-desc')}>{thisProduct.productDesc}</p>

                        {thisProduct.productDiscount > 0 ? (
                            <p className={cx('product-detail-price')}>
                                <span>${thisProduct.productPrice}</span>$
                                {Math.round(
                                    (thisProduct.productPrice -
                                        thisProduct.productPrice * (thisProduct.productDiscount / 100)) *
                                        100,
                                ) / 100}
                            </p>
                        ) : (
                            <p className={cx('product-detail-price')}>${thisProduct.productPrice}</p>
                        )}
                        <div className={cx('product-detail-rating')}>
                            <ReactStars size={20} value={thisProduct.productReview} edit={false} />
                        </div>
                        <div className={cx('product-detail-qty')}>
                            <div
                                className={productQty <= 1 ? cx('qty-minus', 'disabled') : cx('qty-minus')}
                                onClick={() => setProductQty(productQty - 1)}
                            >
                                -
                            </div>
                            <div className={cx('qty-num')}>{productQty}</div>
                            <div className={cx('qty-plus')} onClick={() => setProductQty(productQty + 1)}>
                                +
                            </div>
                        </div>
                        <div className={cx('product-detail-btn')}>
                            <Button primary onClick={() => handleSubmit(thisProduct, productQty)}>
                                ADD TO CART
                            </Button>
                            <Button className={cx('ml-15')} outline>
                                BUY NOW
                            </Button>
                        </div>
                        <div className={cx('product-detail-share')}>
                            <p>SHARE PRODUCT:</p>
                            <ul className={cx('share-list')}>
                                <li>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('featured-product')}>
                    <h1>FEATURED PRODUCTS</h1>
                    <ul className={cx('featured-product-list')}>
                        <Slider {...settings}>
                            {product5Star.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    id={item.id}
                                    isSoldOut={item.isSoldOut}
                                    img={item.productImg}
                                    isTag={item.isTag}
                                    tag={item.productTag}
                                    discount={item.productDiscount}
                                    fname={item.productName}
                                    price={item.productPrice}
                                    review={item.productReview}
                                    item={item}
                                />
                            ))}
                        </Slider>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
