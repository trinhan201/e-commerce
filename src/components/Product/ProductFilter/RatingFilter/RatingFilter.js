import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './RatingFilter.module.scss';
import ReactStars from 'react-rating-stars-component';

const cx = classNames.bind(styles);
function RatingFilter({ setRatingValue, filters }) {
    const [activeRating, setActiveRating] = useState();

    const onUpdateActiveRating = (value) => {
        setActiveRating(value);
    };

    const onSelectRating = (value) => {
        onUpdateActiveRating(value);
        setRatingValue(value);
    };

    useEffect(() => {
        setActiveRating();
    }, [filters.checked]);

    return (
        <div className={cx('filter-by-rating')}>
            <h4 className={cx('filter-title')}>Customer Reviews</h4>
            <div className={cx('filter-rating-field')}>
                <div
                    className={activeRating === 5 ? cx('rating-selection', 'active-rating') : cx('rating-selection')}
                    onClick={() => onSelectRating(5)}
                >
                    <ReactStars size={20} value={5} edit={false} />
                    <span>5.0</span>
                </div>
                <div
                    className={activeRating === 4 ? cx('rating-selection', 'active-rating') : cx('rating-selection')}
                    onClick={() => onSelectRating(4)}
                >
                    <ReactStars size={20} value={4} edit={false} />
                    <span>4.0</span>
                </div>
                <div
                    className={activeRating === 3 ? cx('rating-selection', 'active-rating') : cx('rating-selection')}
                    onClick={() => onSelectRating(3)}
                >
                    <ReactStars size={20} value={3} edit={false} />
                    <span>3.0</span>
                </div>
                <div
                    className={activeRating === 2 ? cx('rating-selection', 'active-rating') : cx('rating-selection')}
                    onClick={() => onSelectRating(2)}
                >
                    <ReactStars size={20} value={2} edit={false} />
                    <span>2.0</span>
                </div>
                <div
                    className={activeRating === 1 ? cx('rating-selection', 'active-rating') : cx('rating-selection')}
                    onClick={() => onSelectRating(1)}
                >
                    <ReactStars size={20} value={1} edit={false} />
                    <span>1.0</span>
                </div>
            </div>
        </div>
    );
}

export default RatingFilter;
