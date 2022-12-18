import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Button';

import { product } from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function Product() {
    return (
        <>
            <div className={cx('product-banner')}>
                <div className={cx('banner-mid')}></div>
                <div className={cx('page-path')}>
                    <NavLink to={config.routes.home}>Home</NavLink> <span>{'>'}</span> Products
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('product-wrapper')}>
                    <div className={cx('product-filter')}>Filter</div>
                    <div className={cx('product-field')}>
                        <ul className={cx('product-list')}>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-item')}>
                                <div className={cx('product-img')}>
                                    <img src={product} alt="" />
                                    <span className={cx('product-tag', 'new-tag')}>New</span>
                                    <div className={cx('to-product-detail')}>
                                        <Button primary to={config.routes.product}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('product-info')}>
                                    <NavLink to={config.routes.product}>
                                        <h3 className={cx('product-name')}>Product name</h3>
                                    </NavLink>
                                    <p className={cx('product-price')}>$775.00</p>
                                    <div className={cx('product-rating')}>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('star-checked')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>
                                    <div className={cx('add-cart-btn')}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className={cx('pagination')}>
                            <li>{'<'}</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>{'>'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
