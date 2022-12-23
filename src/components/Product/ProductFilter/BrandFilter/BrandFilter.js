import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './BrandFilter.module.scss';

const cx = classNames.bind(styles);
function DiscountFilter({ setBrandValue }) {
    const brandList = [
        'Alexander McQueen',
        'Armani Exchange',
        'Bottega Veneta',
        'Caterpillar Safety',
        'Christian Lacroix',
        'Prada Linea Rossa',
    ];
    const [brands, setBrands] = useState([]);

    const handleCheck = (brand) => {
        setBrands((prev) => {
            const isChecked = brands.includes(brand);
            if (isChecked) {
                return brands.filter((item) => item !== brand);
            } else {
                return [...prev, brand];
            }
        });
    };

    const onBrandChange = (brands) => {
        setBrandValue(brands);
    };

    useEffect(() => {
        onBrandChange(brands);
    }, [brands]);

    return (
        <div className={cx('filter-by-brand')}>
            <h4 className={cx('filter-title')}>Brands</h4>
            <div className={cx('filter-brand-field')}>
                {brandList.map((brand) => (
                    <div key={brand} className={cx('brand-selection')}>
                        <input type="checkbox" checked={brands.includes(brand)} onChange={() => handleCheck(brand)} />
                        <label>{brand}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiscountFilter;
