import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import config from '~/config';

import ModalForm from '~/components/Form/ModalForm';
import Search from '~/components/Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    const [toggleNav, setToggleNav] = useState(false);
    const [modalShowForm, setModalShowForm] = useState(false);
    const [modalShowSearch, setModalShowSearch] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                        <NavLink to={config.routes.home}>
                            AN<span>ONYMOUS</span>
                        </NavLink>
                    </div>
                    <div className={cx('search-btn')} onClick={() => setModalShowSearch(!modalShowSearch)}>
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </div>
                    <div className={cx('cart-btn')}>
                        <NavLink to={config.routes.cart}>
                            <FontAwesomeIcon icon={faBagShopping} />
                        </NavLink>
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
                                <NavLink
                                    className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                    to={config.routes.home}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={cx('nav-item')}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                    to={config.routes.product}
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className={cx('nav-item')}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                    to={config.routes.about}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className={cx('nav-item')}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                    to={config.routes.contact}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <div className={cx('dark-mode')}>
                            <span>
                                <FontAwesomeIcon icon={faMoon} />
                            </span>
                        </div>
                    </div>
                    <ul
                        id="nav-list-dropdown"
                        className={toggleNav ? cx('nav-list-dropdown', 'toggleNav') : cx('nav-list-dropdown')}
                    >
                        <li className={cx('nav-item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                to={config.routes.home}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                to={config.routes.product}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                to={config.routes.about}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('nav-link', 'active') : cx('nav-link'))}
                                to={config.routes.contact}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {modalShowForm && <ModalForm setModalShowForm={setModalShowForm} />}
            {modalShowSearch && <Search setModalShowSearch={setModalShowSearch} />}
        </>
    );
}

export default Header;
