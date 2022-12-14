import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '~/components/Cart/cartSystem';

const cx = classNames.bind(styles);
function ProductItem({ id, isSoldOut, img, isTag, tag, discount, fname, price, review, item }) {
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

    const handleAddItem = (item) => {
        dispatch(addToCart(item));
        notify();
    };
    return (
        <li key={id} className={isSoldOut === true ? cx('product-item', 'sold-out') : cx('product-item')}>
            <div className={cx('product-img')}>
                <img src={img} alt="" />
                {isTag === true ? (
                    tag === 'New' ? (
                        <span className={cx('product-tag', 'new-tag')}>{tag}</span>
                    ) : (
                        <span className={cx('product-tag', 'discount-tag')}>{discount} off</span>
                    )
                ) : (
                    <span className={cx('product-tag')}></span>
                )}
                <div className={cx('to-product-detail')}>
                    <Button primary to={`/product/${id}`}>
                        <FontAwesomeIcon icon={faEye} />
                    </Button>
                </div>
            </div>
            <div className={cx('product-info')}>
                <NavLink to={`/product/${id}`}>
                    <h3 className={cx('product-name')}>{fname}</h3>
                </NavLink>
                {discount > 0 ? (
                    <p className={cx('product-price')}>
                        <span>${price}</span>${Math.round((price - price * (discount / 100)) * 100) / 100}
                    </p>
                ) : (
                    <p className={cx('product-price')}>${price}</p>
                )}
                <div className={cx('product-rating')}>
                    <ReactStars size={20} value={review} edit={false} />
                </div>
                <div className={cx('add-cart-btn')} onClick={() => handleAddItem(item)}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
            </div>
        </li>
    );
}

export default ProductItem;
