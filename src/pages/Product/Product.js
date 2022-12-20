import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Button';
import ProductItem from '~/components/Product/ProductItem';
import Pagination from '~/components/Product/Pagination/Pagination';

import productData from '~/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import ReactStars from 'react-rating-stars-component';

const cx = classNames.bind(styles);
function Product() {
    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    //Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = (pageNumber) => {
        setCurrentPage(pageNumber + 1);
    };

    const prevPage = (pageNumber) => {
        setCurrentPage(pageNumber - 1);
    };

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
                                    <ReactStars size={20} value={5} edit={false} />
                                    <span>5.0</span>
                                </div>
                                <div className={cx('review-selection')}>
                                    <ReactStars size={20} value={4} edit={false} />
                                    <span>4.0</span>
                                </div>
                                <div className={cx('review-selection')}>
                                    <ReactStars size={20} value={3} edit={false} />
                                    <span>3.0</span>
                                </div>
                                <div className={cx('review-selection')}>
                                    <ReactStars size={20} value={2} edit={false} />
                                    <span>2.0</span>
                                </div>
                                <div className={cx('review-selection')}>
                                    <ReactStars size={20} value={1} edit={false} />
                                    <span>1.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-field')}>
                        <ul className={cx('product-list')}>
                            {currentProducts.map((item) => (
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
                        <Pagination
                            productsPerPage={productsPerPage}
                            totalProduct={productData.length}
                            currPageNum={currentPage}
                            lastPageNum={productData.length / productsPerPage}
                            paginate={paginate}
                            prevPage={prevPage}
                            nextPage={nextPage}
                        />
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
