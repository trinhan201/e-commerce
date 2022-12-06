import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

import ModalForm from '~/components/Form/ModalForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    const [toggleNav, setToggleNav] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [activeNavLink, setActiveNavLink] = useState('home');

    const onUpdateActiveNavLink = (value) => {
        setActiveNavLink(value);
    };

    return (
        <>
            <div className={cx('top-header')}>
                <div className={cx('container', 'header-container')}>
                    <div className={cx('login-btn')} onClick={() => setModalShow(!modalShow)}>
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                    <div className={cx('logo')}>
                        <h1>
                            <Link to={config.routes.home}>
                                PA Shop<span>Shop what you wanted</span>
                            </Link>
                        </h1>
                    </div>
                    <div className={cx('search-btn')}>
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </div>
                    <div className={cx('cart-btn')}>
                        <span>
                            <FontAwesomeIcon icon={faBagShopping} />
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('nav-bar')}>
                <div className={cx('container', 'mt-15', 'mb-15')}>
                    <div className={cx('nav-container')}>
                        <div className={cx('nav-dropdown')} onClick={() => setToggleNav(!toggleNav)}>
                            <span>
                                {toggleNav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                            </span>
                        </div>
                        <ul className={cx('nav-list')}>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('home')}>
                                <Link
                                    className={activeNavLink === 'home' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('product')}>
                                <Link
                                    className={activeNavLink === 'product' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/product"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('about')}>
                                <Link
                                    className={activeNavLink === 'about' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/about"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('contact')}>
                                <Link
                                    className={activeNavLink === 'contact' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/contact"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className={cx('dark-mode')}>
                            <span>
                                <FontAwesomeIcon icon={faMoon} />
                            </span>
                        </div>
                    </div>
                    {toggleNav && (
                        <ul id="nav-list-dropdown" className={cx('nav-list-dropdown', 'mt-15')}>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('home')}>
                                <Link
                                    className={
                                        activeNavLink === 'home' ? cx('nav-link', 'active-dropdown') : cx('nav-link')
                                    }
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('product')}>
                                <Link
                                    className={
                                        activeNavLink === 'product' ? cx('nav-link', 'active-dropdown') : cx('nav-link')
                                    }
                                    to="/product"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('about')}>
                                <Link
                                    className={
                                        activeNavLink === 'about' ? cx('nav-link', 'active-dropdown') : cx('nav-link')
                                    }
                                    to="/about"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className={cx('nav-item')} onClick={() => onUpdateActiveNavLink('contact')}>
                                <Link
                                    className={
                                        activeNavLink === 'contact' ? cx('nav-link', 'active-dropdown') : cx('nav-link')
                                    }
                                    to="/contact"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            {modalShow && <ModalForm setModalShow={setModalShow} />}
        </>
    );
}

export default Header;
