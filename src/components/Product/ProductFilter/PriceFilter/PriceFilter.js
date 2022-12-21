import classNames from 'classnames/bind';
import styles from './PriceFilter.module.scss';

const cx = classNames.bind(styles);
function PriceFilter() {
    return (
        <div className={cx('filter-by-price')}>
            <h4 className={cx('filter-title')}>Price</h4>
            <div className={cx('filter-price-field')}>
                <div className={cx('price-selection')}>Under $10</div>
                <div className={cx('price-selection')}>$10 - $30</div>
                <div className={cx('price-selection')}>$30 - $60</div>
                <div className={cx('price-selection')}>$60 - $90</div>
                <div className={cx('price-selection')}>Over $90</div>
            </div>
        </div>
    );
}

export default PriceFilter;
