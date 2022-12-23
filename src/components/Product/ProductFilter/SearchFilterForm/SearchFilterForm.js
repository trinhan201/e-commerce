import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchFilterForm.module.scss';

const cx = classNames.bind(styles);
function SearchFilterForm({ setSearchTerm }) {
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setSearchTerm(value);
        }, 300);
    };

    return (
        <div className={cx('filter-by-name')}>
            <h4 className={cx('filter-title')}>Search Here...</h4>
            <div className={cx('filter-input-field')}>
                <input type="text" placeholder="Search here..." onChange={handleSearchTermChange} />
            </div>
        </div>
    );
}

export default SearchFilterForm;
