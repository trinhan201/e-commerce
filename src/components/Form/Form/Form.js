import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Form() {
    const [changeForm, setChangeForm] = useState(false);
    const [activeBtn, setActiveBtn] = useState('activeLogin');

    const onUpdateActiveBtn = (value) => {
        setActiveBtn(value);
    };

    return (
        <>
            <Button
                className={activeBtn === 'activeLogin' ? '' : cx('non-active')}
                onClick={() => {
                    setChangeForm(false);
                    onUpdateActiveBtn('activeLogin');
                }}
            >
                LOGIN
            </Button>
            <Button
                className={activeBtn === 'activeRegister' ? '' : cx('non-active')}
                onClick={() => {
                    setChangeForm(true);
                    onUpdateActiveBtn('activeRegister');
                }}
            >
                REGISTER
            </Button>
            <form>
                {changeForm && (
                    <input
                        className={cx('form-input', 'resgiter-input')}
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                )}
                <input className={cx('form-input')} type="email" name="email" placeholder="Email Address" required />
                <input className={cx('form-input')} type="password" name="password" placeholder="Password" required />
                {changeForm && (
                    <input
                        className={cx('form-input', 'resgiter-input')}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                    />
                )}

                {!changeForm && (
                    <Button className={cx('submit-btn')} outline large>
                        SIGN IN
                    </Button>
                )}

                {changeForm && (
                    <Button className={cx('submit-btn')} outline large>
                        CREATE ACCOUNT
                    </Button>
                )}
            </form>
        </>
    );
}

export default Form;
