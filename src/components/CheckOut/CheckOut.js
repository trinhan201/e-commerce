import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CheckOut.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { visa, paypal } from '~/assets/img';
import Button from '../Button';

const cx = classNames.bind(styles);
function CheckOut({ setCheckOutForm }) {
    const [paymentActive, setPaymentActive] = useState('visa');

    const onUpdateActiveLink = (value) => {
        setPaymentActive(value);
    };
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
                <div className={cx('right-side')}></div>
            </div>
        </div>
    );
}

export default CheckOut;
