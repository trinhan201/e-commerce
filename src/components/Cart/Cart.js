import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx('cart-container')}>
            <p>Your shopping cart is empty</p>
        </div>
    );
}

export default Cart;
