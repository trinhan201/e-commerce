import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './PriceFilter.module.scss';

import ReactSlider from 'react-slider';

const cx = classNames.bind(styles);
function PriceFilter({ setPriceValue }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const handleInput = (minPrice, maxPrice) => {
        setPriceValue([minPrice, maxPrice]);
    };

    useEffect(() => {
        handleInput(minPrice, maxPrice);
    }, [minPrice, maxPrice]);

    return (
        <div className={cx('filter-by-price')}>
            <h4 className={cx('filter-title')}>Price</h4>
            <div className={cx('price-value-field')}>
                <p>${minPrice}</p>
                <p>${maxPrice}</p>
            </div>

            <ReactSlider
                defaultValue={[minPrice, maxPrice]}
                className={cx('slider')}
                trackClassName={cx('tracker')}
                min={0}
                max={100}
                minDistance={10}
                step={1}
                withTracks={true}
                pearling={true}
                renderThumb={(props) => {
                    return <div {...props} className={cx('thumb')}></div>;
                }}
                renderTrack={(props) => {
                    return <div {...props} className={cx('track')}></div>;
                }}
                onChange={([minPrice, maxPrice]) => {
                    setMinPrice(minPrice);
                    setMaxPrice(maxPrice);
                }}
            />
        </div>
    );
}

export default PriceFilter;
