import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Button';
import ProductItem from '~/components/Product/ProductItem';

import productData from '~/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFilter, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
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
                        <div className={cx('filter-by-category')}>
                            <h4 className={cx('filter-title')}>Category</h4>
                            <div className={cx('filter-category-field')}>
                                <div className={cx('category-selection')}>
                                    <input type="checkbox" value="men" />
                                    <label>Men</label>
                                </div>
                                <div className={cx('category-selection')}>
                                    <input type="checkbox" value="women" />
                                    <label>Women</label>
                                </div>
                                <div className={cx('category-selection')}>
                                    <input type="checkbox" value="kid" />
                                    <label>Kid</label>
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
                            {productData.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    isSoldOut={item.isSoldOut}
                                    img={item.productImg}
                                    isTag={item.isTag}
                                    tag={item.productTag}
                                    discount={item.productDiscount}
                                    fname={item.productName}
                                    price={item.productPrice}
                                    review={item.productReview}
                                />
                            ))}
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
