import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div classNames={cx('wrapper')}>
            <header>
                <h1>Header</h1>
            </header>
            <div classNames={cx('container')}>
                <div classNames={cx('content')}>{children}</div>
            </div>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    );
}

export default DefaultLayout;
