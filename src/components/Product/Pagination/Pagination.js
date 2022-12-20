import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

import { NavLink } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function Pagination({ productsPerPage, totalProduct, currPageNum, lastPageNum, paginate, prevPage, nextPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    let num = currPageNum;

    return (
        <nav>
            <ul className={cx('pagination')}>
                <li className={num === 1 ? cx('disabled') : ''} onClick={() => prevPage(num)}>
                    {'<'}
                </li>
                {pageNumbers.map((number) => (
                    <li className={currPageNum === number ? cx('active') : ''} key={number}>
                        <NavLink onClick={() => paginate(number)} to={config.routes.product}>
                            {number}
                        </NavLink>
                    </li>
                ))}
                <li className={num === lastPageNum ? cx('disabled') : ''} onClick={() => nextPage(num)}>
                    {'>'}
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
