import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Button';

import { product } from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartPlus, faEye, faFilter, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function Product() {
    const [showFilter, setShowFilter] = useState(false);

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
                    <div className={showFilter ? cx('product-filter', 'show-filter') : cx('product-filter')}>
                        <div className={cx('filter-close-btn')} onClick={() => setShowFilter(false)}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <div className={cx('filter-by-name')}>
                            <h4 className={cx('filter-title')}>Search Here...</h4>
                            <div className={cx('filter-input-field')}>
                                <input type="text" placeholder="Search here..." />
                                <Button className={cx('filter-input-btn')} primary small>
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </div>
                        </div>
                        <div className={cx('filter-by-price')}>
                            <h4 className={cx('filter-title')}>Price</h4>
                            <div className={cx('filter-price-field')}>
                                <div className={cx('price-selection')}>
                                    <input type="radio" value="ascending" />
                                    <label>Ascending</label>
                                </div>
                                <div className={cx('price-selection')}>
                                    <input type="radio" value="descending" />
                                    <label>Descending</label>
                                </div>
                            </div>
                        </div>
                        <div className={cx('filter-by-brand')}>
                            <h4 className={cx('filter-title')}>Brand</h4>
                            <div className={cx('filter-brand-field')}>
                                <div className={cx('brand-selection')}>
                                    <input type="checkbox" value="vincentChase" />
                                    <label>Vincent Chase</label>
                                </div>
                                <div className={cx('brand-selection')}>
                                    <input type="checkbox" value="johnJacobs" />
                                    <label>John Jacobs</label>
                                </div>
                                <div className={cx('brand-selection')}>
                                    <input type="checkbox" value="tommyHilfiger" />
                                    <label>Tommy Hilfiger</label>
                                </div>
                                <div className={cx('brand-selection')}>
                                    <input type="checkbox" value="bossOrange" />
                                    <label>Boss Orange</label>
                                </div>
                            </div>
                        </div>
                        <div className={cx('filter-by-discount')}>
                            <h4 className={cx('filter-title')}>Discount</h4>
                            <div className={cx('filter-discount-field')}>
                                <div className={cx('discount-selection')}>
                                    <input type="checkbox" value="5%" />
                                    <label>5% or More</label>
                                </div>
                                <div className={cx('discount-selection')}>
                                    <input type="checkbox" value="10%" />
                                    <label>10% or More</label>
                                </div>
                                <div className={cx('discount-selection')}>
                                    <input type="checkbox" value="20%" />
                                    <label>20% or More</label>
                                </div>
                                <div className={cx('discount-selection')}>
                                    <input type="checkbox" value="30%" />
                                    <label>30% or More</label>
                                </div>
                                <div className={cx('discount-selection')}>
                                    <input type="checkbox" value="50%" />
                                    <label>50% or More</label>
                                </div>
                                <div className={cx('discount-selection')}>
                                    <input type="checkbox" value="60%" />
                                    <label>60% or More</label>
                                </div>
                            </div>
                        </div>
                        <div className={cx('filter-by-review')}>
                            <h4 className={cx('filter-title')}>Customer Review</h4>
                            <div className={cx('filter-review-field')}>
                                <div className={cx('review-selection')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>5.0</span>
                                </div>
                                <div className={cx('review-selection')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
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
                                    <span>4.0</span>
                                </div>
                                <div className={cx('review-selection')}>
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
                                    <span>3.0</span>
                                </div>
                                <div className={cx('review-selection')}>
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
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>2.0</span>
                                </div>
                                <div className={cx('review-selection')}>
                                    <span className={cx('star-checked')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span>1.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
            <div className={cx('filter-show-btn')} onClick={() => setShowFilter(true)}>
                <Button primary>
                    <FontAwesomeIcon icon={faFilter} /> <b>Filter</b>
                </Button>
            </div>
        </>
    );
}

export default Product;
