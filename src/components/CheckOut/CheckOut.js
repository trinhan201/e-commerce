import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CheckOut.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { visa, paypal } from '~/assets/img';
import Button from '../Button';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItem, decrementAnItem, updateQuantity } from '~/components/Cart/cartSystem';

const cx = classNames.bind(styles);
function CheckOut({ setCheckOutForm }) {
    const [paymentActive, setPaymentActive] = useState('visa');
    const cartProducts = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const shippingFee = 1.0;

    const onUpdateActiveLink = (value) => {
        setPaymentActive(value);
    };

    const totalPrice = cartProducts.reduce((total, item) => {
        const price = item.productPrice - item.productPrice * (item.productDiscount / 100);
        return total + item.quantity * price;
    }, 0);

    return (
        <div className={cx('modal')} onClick={() => setCheckOutForm(false)}>
            <div className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('modal-close-btn')} onClick={() => setCheckOutForm(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('left-side')}>
                    <div className={cx('checkout-info')}>
                        <h4>CHECKOUT INFORMATION</h4>
                        <div className={cx('payment-methods')}>
                            <p>Pay with</p>
                            <div className={cx('payment-methods-field')}>
                                <div
                                    className={
                                        paymentActive === 'visa'
                                            ? cx('payment-methods-selection', 'activePayment')
                                            : cx('payment-methods-selection')
                                    }
                                    onClick={() => onUpdateActiveLink('visa')}
                                >
                                    <img src={visa} alt="" />
                                </div>
                                <div
                                    className={
                                        paymentActive === 'paypal'
                                            ? cx('payment-methods-selection', 'activePayment')
                                            : cx('payment-methods-selection')
                                    }
                                    onClick={() => onUpdateActiveLink('paypal')}
                                >
                                    <img src={paypal} alt="" />
                                </div>
                            </div>
                        </div>
                        <form className={cx('checkout-form')}>
                            <div className={cx('form-checkout-input')}>
                                <label>Name</label>
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className={cx('form-checkout-input')}>
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                            <div className={cx('form-checkout-input')}>
                                <label>Phone number</label>
                                <input type="text" placeholder="Enter your phone number" />
                            </div>
                            <div className={cx('form-checkout-input')}>
                                <label>Address</label>
                                <input type="text" placeholder="Enter your address" />
                            </div>
                        </form>
                    </div>
                    <Button className={cx('order-btn')} primary>
                        BUY
                    </Button>
                </div>
                <div className={cx('right-side')}>
                    <h2>Order summary</h2>
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
                                            <p
                                                className={cx('qty-num')}
                                                onChange={() => dispatch(updateQuantity({ item, quantity }))}
                                            >
                                                {quantity}
                                            </p>
                                        </div>
                                        <div className={cx('item-total-price')}>
                                            ${Math.round(price * quantity * 100) / 100}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('bill-order')}>
                        <div className={cx('total-bill-info')}>
                            <span>Sub Total:</span>
                            <span>${totalPrice}</span>
                        </div>
                        <div className={cx('total-bill-info')}>
                            <span>Shipping fee:</span>
                            <span>${shippingFee}</span>
                        </div>
                        <div className={cx('total-bill-info')}>
                            <span>Total:</span>
                            <span>${totalPrice + shippingFee}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
