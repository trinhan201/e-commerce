import classNames from 'classnames/bind';
import styles from './ModalForm.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Form from '../Form';

const cx = classNames.bind(styles);
function ModalForm({ setModalShowForm }) {
    return (
        <div className={cx('modal')} onClick={() => setModalShowForm(false)}>
            <div className={cx('modal-container')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('modal-close-btn')} onClick={() => setModalShowForm(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('modal-body')}>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default ModalForm;
