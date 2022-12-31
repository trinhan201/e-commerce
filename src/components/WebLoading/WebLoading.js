import classNames from 'classnames/bind';
import styles from './WebLoading.module.scss';
import BarLoader from 'react-spinners/BarLoader';
import { webLogo } from '~/assets/img';

const cx = classNames.bind(styles);
function WebLoading() {
    return (
        <div className={cx('loading-wrapper')}>
            <div className={cx('loading-img')}>
                <img src={webLogo} alt="" />
            </div>
            <div>
                <BarLoader color={'#615c85'} loading={true} height={6} width={250} />
            </div>
        </div>
    );
}

export default WebLoading;
