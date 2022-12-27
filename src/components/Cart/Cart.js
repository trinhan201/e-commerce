import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { shoppingCart } from '~/assets/img';
import config from '~/config';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItem, decrementAnItem, updateQuantity } from './cartSystem';

const cx = classNames.bind(styles);
function Cart() {
    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalItems = cartProducts.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    const totalPrice = cartProducts.reduce((total, item) => {
        const price = item.productPrice - item.productPrice * (item.productDiscount / 100);
        return total + item.quantity * (Math.round(price * 100) / 100);
    }, 0);

    return (
        <div className={cx('container')}>
            {totalItems === 0 ? (
                <div className={cx('cart-empty-container')}>
                    <div className={cx('cart-empty')}>
                        <div className={cx('empty-img')}>
                            <img src={shoppingCart} alt="" />
                        </div>
                        <p className={cx('cart-empty-text')}>Your shopping cart is empty</p>
                        <Button to={config.routes.product} primary>
                            SHOP NOW !!!
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={cx('cart-container')}>
                    <div className={cx('cart-list')}>
                        <div className={cx('cart-item-header')}>
                            <div className={cx('item-name-heading')}>Product</div>
                            <div className={cx('item-price-heading')}>Price</div>
                            <div className={cx('item-qty-heading')}>Quantity</div>
                            <div className={cx('item-total-heading')}>Total</div>
                        </div>
                        {cartProducts.map((item, index) => {
                            const quantity = item.quantity;
                            const price = item.productPrice - item.productPrice * (item.productDiscount / 100);
                            return (
                                <div key={index} className={cx('cart-item')}>
                                    <div className={cx('section-1')}>
                                        <div className={cx('item-img')}>
                                            <img src={item.productImg} alt="" />
                                        </div>
                                        <div className={cx('item-name')}>{item.productName}</div>
                                    </div>
                                    <div className={cx('section-2')}>
                                        <div className={cx('item-price')}>${Math.round(price * 100) / 100}</div>
                                        <div className={cx('item-qty')}>
                                            <div
                                                className={
                                                    quantity <= 1 ? cx('qty-minus', 'disabled') : cx('qty-minus')
                                                }
                                                onClick={() => dispatch(decrementAnItem(item))}
                                            >
                                                -
                                            </div>
                                            <p onChange={() => dispatch(updateQuantity({ item, quantity }))}>
                                                {quantity}
                                            </p>
                                            <div className={cx('qty-plus')} onClick={() => dispatch(addToCart(item))}>
                                                +
                                            </div>
                                        </div>
                                        <div className={cx('item-total-price')}>
                                            ${(Math.round(price * 100) / 100) * quantity}
                                        </div>
                                    </div>
                                    <div className={cx('item-del-btn')} onClick={() => dispatch(removeItem(item.id))}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('cart-bill')}>
                        <div className={cx('order-total-qty')}>
                            Quantity: <span>{totalItems}</span>
                        </div>
                        <div className={cx('order-total-price')}>
                            Total: <span>${totalPrice}</span>
                        </div>
                        <div className={cx('bill-actions')}>
                            <Button className={cx('check-out-btn')} primary>
                                CHECK OUT
                            </Button>
                            <Button to={config.routes.product} primary>
                                SHOP MORE
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
