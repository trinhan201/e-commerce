import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchFilterForm.module.scss';

const cx = classNames.bind(styles);
function SearchFilterForm({ setSearchTerm, filters }) {
    const [search, setSearch] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const onSearchChange = (search) => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setSearchTerm(search);
        }, 300);
    };

    useEffect(() => {
        onSearchChange(search);
    }, [search]);

    useEffect(() => {
        setSearch('');
    }, [filters.checked]);

    return (
        <div className={cx('filter-by-name')}>
            <h4 className={cx('filter-title')}>Search Here...</h4>
            <div className={cx('filter-input-field')}>
                <input type="text" value={search} placeholder="Search here..." onChange={handleSearchTermChange} />
            </div>
        </div>
    );
}

export default SearchFilterForm;
