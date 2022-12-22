import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryFilter.module.scss';

const cx = classNames.bind(styles);
function CategoryFilter({ setCategoryValue }) {
    const categoryList = ['Men', 'Women', 'Kid'];
    const [categories, setCategories] = useState([]);

    const handleCheck = (category) => {
        setCategories((prev) => {
            const isChecked = categories.includes(category);
            if (isChecked) {
                return categories.filter((item) => item !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    const onCategoryChange = (categories) => {
        setCategoryValue(categories);
    };

    useEffect(() => {
        onCategoryChange(categories);
    }, [categories]);

    return (
        <div className={cx('filter-by-category')}>
            <h4 className={cx('filter-title')}>Category</h4>
            <div className={cx('filter-category-field')}>
                {categoryList.map((category) => (
                    <div key={category} className={cx('category-selection')}>
                        <input
                            type="checkbox"
                            checked={categories.includes(category)}
                            onChange={() => handleCheck(category)}
                        />
                        <label>{category}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;
