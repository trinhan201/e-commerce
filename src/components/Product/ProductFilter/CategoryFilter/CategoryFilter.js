import classNames from 'classnames/bind';
import styles from './CategoryFilter.module.scss';

const cx = classNames.bind(styles);
function CategoryFilter() {
    return (
        <div className={cx('filter-by-category')}>
            <h4 className={cx('filter-title')}>Category</h4>
            <div className={cx('filter-category-field')}>
                <div className={cx('category-selection')}>
                    <input type="checkbox" value="men" />
                    <label>Men</label>
                </div>
                <div className={cx('category-selection')}>
                    <input type="checkbox" value="women" />
                    <label>Women</label>
                </div>
                <div className={cx('category-selection')}>
                    <input type="checkbox" value="kid" />
                    <label>Kid</label>
                </div>
            </div>
        </div>
    );
}

export default CategoryFilter;
