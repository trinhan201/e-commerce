import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div classNames={cx('wrapper')}>
            <Header />
            <div classNames={cx('container')}>
                <div classNames={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
