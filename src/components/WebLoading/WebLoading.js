import classNames from 'classnames/bind';
import styles from './WebLoading.module.scss';
import PulseLoader from 'react-spinners/PulseLoader';
import { webLogo } from '~/assets/img';

const cx = classNames.bind(styles);
function WebLoading() {
    return (
        <div className={cx('loading-wrapper')}>
            <div className={cx('loading-img')}>
                <img src={webLogo} alt="" />
            </div>
            <div>
                <PulseLoader color={'#615c85'} loading={true} size={20} />
            </div>
        </div>
    );
}

export default WebLoading;
