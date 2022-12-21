import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Button';
import ProductItem from '~/components/Product/ProductItem';
import Pagination from '~/components/Product/Pagination/Pagination';
import CategoryFilter from '~/components/Product/ProductFilter/CategoryFilter';
import DiscountFilter from '~/components/Product/ProductFilter/DiscountFilter';
import RatingFilter from '~/components/Product/ProductFilter/RatingFilter';
import PriceFilter from '~/components/Product/ProductFilter/PriceFilter';

import productData from '~/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/config';

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
                        <PriceFilter />
                        <CategoryFilter />
                        <DiscountFilter />
                        <RatingFilter />
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
