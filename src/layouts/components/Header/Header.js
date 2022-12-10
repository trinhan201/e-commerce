import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

import ModalForm from '~/components/Form/ModalForm';
import Search from '~/components/Search';
// import Cart from '~/components/Cart';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    const [toggleNav, setToggleNav] = useState(false);
    const [modalShowForm, setModalShowForm] = useState(false);
    const [modalShowSearch, setModalShowSearch] = useState(false);
    const [activeNavLink, setActiveNavLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onUpdateActiveNavLink = (value) => {
        setActiveNavLink(value);
    };

    useEffect(() => {
        modalShowForm && (document.body.style.overflow = 'hidden');
        !modalShowForm && (document.body.style.overflow = 'unset');
    }, [modalShowForm]);

    useEffect(() => {
        toggleNav && (document.body.style.overflow = 'hidden');
        !toggleNav && (document.body.style.overflow = 'unset');
    }, [toggleNav]);

    useEffect(() => {
        const scrollPage = () => {
            const windowHeight = window.scrollY;
            if (windowHeight >= 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', scrollPage);

        return () => window.removeEventListener('scroll', scrollPage);
    }, []);

    return (
        <>
            <div className={cx('top-header')}>
                <div className={cx('container', 'header-container')}>
                    <div className={cx('login-btn')} onClick={() => setModalShowForm(!modalShowForm)}>
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
                    <div className={cx('search-btn')} onClick={() => setModalShowSearch(!modalShowSearch)}>
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </div>
                    <div className={cx('cart-btn')}>
                        <Link to="/cart" onClick={() => onUpdateActiveNavLink('')}>
                            <FontAwesomeIcon icon={faBagShopping} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={scrolled ? cx('nav-bar', 'nav-bar-effect') : cx('nav-bar')}>
                <div className={cx('container', 'mt-15', 'mb-15')}>
                    <div className={cx('nav-container')}>
                        <div className={cx('nav-dropdown')} onClick={() => setToggleNav(!toggleNav)}>
                            <span>
                                {toggleNav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                            </span>
                        </div>
                        <ul className={cx('nav-list')}>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('home')}
                                    className={activeNavLink === 'home' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('product')}
                                    className={activeNavLink === 'product' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/product"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('about')}
                                    className={activeNavLink === 'about' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/about"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('contact')}
                                    className={activeNavLink === 'contact' ? cx('nav-link', 'active') : cx('nav-link')}
                                    to="/contact"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className={scrolled ? cx('dark-mode', 'dark-mode-color') : cx('dark-mode')}>
                            <span>
                                <FontAwesomeIcon icon={faMoon} />
                            </span>
                        </div>
                    </div>
                    {toggleNav && (
                        <ul id="nav-list-dropdown" className={cx('nav-list-dropdown', 'mt-15')}>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('home')}
                                    className={
                                        activeNavLink === 'home' ? cx('nav-link', 'active-dropdown') : cx('nav-link')
                                    }
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('product')}
                                    className={
                                        activeNavLink === 'product' ? cx('nav-link', 'active-dropdown') : cx('nav-link')
                                    }
                                    to="/product"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('about')}
                                    className={
                                        activeNavLink === 'about' ? cx('nav-link', 'active-dropdown') : cx('nav-link')
                                    }
                                    to="/about"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className={cx('nav-item')}>
                                <Link
                                    onClick={() => onUpdateActiveNavLink('contact')}
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
            {modalShowForm && <ModalForm setModalShowForm={setModalShowForm} />}
            {modalShowSearch && <Search setModalShowSearch={setModalShowSearch} />}
        </>
    );
}

export default Header;
