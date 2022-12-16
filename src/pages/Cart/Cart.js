import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { shoppingCart } from '~/assets/img';
import config from '~/config';

const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx('container')}>
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
            {/* <div className={cx('cart-container')}>
                <div className={cx('cart-list')}>
                    <div className={cx('cart-item-header')}>
                        <div className={cx('item-name-heading')}>Product</div>
                        <div className={cx('item-price-heading')}>Price</div>
                        <div className={cx('item-qty-heading')}>Quantity</div>
                        <div className={cx('item-total-heading')}>Total</div>
                    </div>
                    <div className={cx('cart-item')}>
                        <div className={cx('section-1')}>
                            <div className={cx('item-img')}>
                                <img src="https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro-rmx1971.jpg" alt="" />
                            </div>
                            <div className={cx('item-name')}>
                                Realme 5 Pro Realme 5 ProRealme 5 ProRealme 5 ProRealme 5 Pro
                            </div>
                        </div>
                        <div className={cx('section-2')}>
                            <div className={cx('item-price')}>2000000</div>
                            <div className={cx('item-qty')}>
                                <div className={cx('qty-minus')}>-</div>
                                <p>1</p>
                                <div className={cx('qty-plus')}>+</div>
                            </div>
                            <div className={cx('item-total-price')}>2000000</div>
                        </div>
                        <div className={cx('item-del-btn')}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                    <div className={cx('cart-item')}>
                        <div className={cx('section-1')}>
                            <div className={cx('item-img')}>
                                <img src="https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro-rmx1971.jpg" alt="" />
                            </div>
                            <div className={cx('item-name')}>
                                Realme 5 Pro Realme 5 ProRealme 5 ProRealme 5 ProRealme 5 Pro
                            </div>
                        </div>
                        <div className={cx('section-2')}>
                            <div className={cx('item-price')}>2000000</div>
                            <div className={cx('item-qty')}>
                                <div className={cx('qty-minus')}>-</div>
                                <p>1</p>
                                <div className={cx('qty-plus')}>+</div>
                            </div>
                            <div className={cx('item-total-price')}>2000000</div>
                        </div>
                        <div className={cx('item-del-btn')}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                    <div className={cx('cart-item')}>
                        <div className={cx('section-1')}>
                            <div className={cx('item-img')}>
                                <img src="https://fdn2.gsmarena.com/vv/bigpic/realme-5-pro-rmx1971.jpg" alt="" />
                            </div>
                            <div className={cx('item-name')}>
                                Realme 5 Pro Realme 5 ProRealme 5 ProRealme 5 ProRealme 5 Pro
                            </div>
                        </div>
                        <div className={cx('section-2')}>
                            <div className={cx('item-price')}>2000000</div>
                            <div className={cx('item-qty')}>
                                <div className={cx('qty-minus')}>-</div>
                                <p>1</p>
                                <div className={cx('qty-plus')}>+</div>
                            </div>
                            <div className={cx('item-total-price')}>2000000</div>
                        </div>
                        <div className={cx('item-del-btn')}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                </div>
                <div className={cx('cart-bill')}>
                    <div className={cx('order-total-qty')}>
                        Quantity: <span>1</span>
                    </div>
                    <div className={cx('order-total-price')}>
                        Total: <span>2000000</span>
                    </div>
                    <div className={cx('bill-actions')}>
                        <Button primary>CHECK OUT</Button>
                        <Button to={config.routes.product} primary>SHOP MORE</Button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Cart;
