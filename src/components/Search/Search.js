import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Search({ setModalShowSearch }) {
    return (
        <div className={cx('modal-search')}>
            <div className={cx('close-search-btn')} onClick={() => setModalShowSearch(false)}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className={cx('modal-search-container')}>
                <input type="text" placeholder="Enter Keyword..." />
                <Button primary small className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </div>
        </div>
    );
}

export default Search;
