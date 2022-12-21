import classNames from 'classnames/bind';
import styles from './RatingFilter.module.scss';
import ReactStars from 'react-rating-stars-component';

const cx = classNames.bind(styles);
function RatingFilter() {
    return (
        <div className={cx('filter-by-rating')}>
            <h4 className={cx('filter-title')}>Customer Review</h4>
            <div className={cx('filter-rating-field')}>
                <div className={cx('rating-selection')}>
                    <ReactStars classNames={cx('pointer')} size={20} value={5} edit={false} />
                    <span>5.0</span>
                </div>
                <div className={cx('rating-selection')}>
                    <ReactStars size={20} value={4} edit={false} />
                    <span>4.0</span>
                </div>
                <div className={cx('rating-selection')}>
                    <ReactStars size={20} value={3} edit={false} />
                    <span>3.0</span>
                </div>
                <div className={cx('rating-selection')}>
                    <ReactStars size={20} value={2} edit={false} />
                    <span>2.0</span>
                </div>
                <div className={cx('rating-selection')}>
                    <ReactStars size={20} value={1} edit={false} />
                    <span>1.0</span>
                </div>
            </div>
        </div>
    );
}

export default RatingFilter;
