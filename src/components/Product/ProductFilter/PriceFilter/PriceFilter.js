import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './PriceFilter.module.scss';

const cx = classNames.bind(styles);
function PriceFilter({ setPriceValue }) {
    const [price, setPrice] = useState(0);
    const handleInput = (e) => {
        setPriceValue(e.target.value);
    };

    return (
        <div className={cx('filter-by-price')}>
            <h4 className={cx('filter-title')}>Price</h4>
            <p>${price}</p>
            <input
                className={cx('input-slider')}
                type="range"
                value={price}
                onInput={handleInput}
                onChange={(e) => setPrice(e.target.value)}
            />
        </div>
    );
}

export default PriceFilter;
