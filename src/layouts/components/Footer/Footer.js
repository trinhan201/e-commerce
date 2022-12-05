import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <>
            <div className={cx('newsletter')}>
                <div className={cx('container')}>
                    <div className={cx('newsletter-content')}>
                        <div className={cx('newsletter-text')}>
                            <h1>Newsletter</h1>
                            <p>Don't forget subscribe to give news of products</p>
                        </div>
                        <div className={cx('newsletter-form')}>
                            <input className={cx('newsletter-input')} type="email" placeholder="Email" />
                            <Button primary className={cx('newsletter-submit')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div className={cx('container')}>
                    <div className={cx('info')}>
                        <div className={cx('info-content')}>
                            <div className="title">
                                <h1>CONTACT</h1>
                            </div>
                        </div>
                        <div className={cx('info-content')}>
                            <div className="title">
                                <h1>INFOMATION</h1>
                            </div>
                        </div>
                        <div className={cx('info-content')}>
                            <div className="title">
                                <h1>CATEGORY</h1>
                            </div>
                        </div>
                        <div className={cx('info-content')}>
                            <div className="title">
                                <h1>PROFILE</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
