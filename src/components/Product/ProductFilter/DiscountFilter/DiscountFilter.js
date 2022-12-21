import classNames from 'classnames/bind';
import styles from './DiscountFilter.module.scss';

const cx = classNames.bind(styles);
function DiscountFilter() {
    return (
        <div className={cx('filter-by-discount')}>
            <h4 className={cx('filter-title')}>Discount</h4>
            <div className={cx('filter-discount-field')}>
                <div className={cx('discount-selection')}>
                    <input type="checkbox" value="5%" />
                    <label>5% or More</label>
                </div>
                <div className={cx('discount-selection')}>
                    <input type="checkbox" value="10%" />
                    <label>10% or More</label>
                </div>
                <div className={cx('discount-selection')}>
                    <input type="checkbox" value="20%" />
                    <label>20% or More</label>
                </div>
                <div className={cx('discount-selection')}>
                    <input type="checkbox" value="30%" />
                    <label>30% or More</label>
                </div>
                <div className={cx('discount-selection')}>
                    <input type="checkbox" value="50%" />
                    <label>50% or More</label>
                </div>
                <div className={cx('discount-selection')}>
                    <input type="checkbox" value="60%" />
                    <label>60% or More</label>
                </div>
            </div>
        </div>
    );
}

export default DiscountFilter;
