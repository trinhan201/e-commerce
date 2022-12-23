import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import Button from '~/components/Button';
import ProductItem from '~/components/Product/ProductItem';
import Pagination from '~/components/Product/Pagination/Pagination';
import FilterPanel from '~/components/Product/ProductFilter/FilterPanel';

import productData from '~/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFilter } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);
function Product() {
    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    const [finalProduct, setFinalProduct] = useState([]);
    const [filters, setFilters] = useState({
        category: [],
        rating: 0,
        price: [0, 100],
        searchTerm: '',
        brand: [],
    });

    //Product filter
    const handleUpdateFilter = (newFilters) => {
        setFilters((prev) => {
            return { ...prev, ...newFilters };
        });
    };

    const filterByCategory = (array) => {
        if (filters.category.length > 0) {
            return array.filter((item) => filters.category.includes(item.productCategory));
        } else {
            return array;
        }
    };

    const filterByRating = (array) => {
        if (filters.rating) {
            return array.filter((item) => item.productReview === filters.rating);
        } else {
            return array;
        }
    };

    const filterByPrice = (array) => {
        if (filters.price) {
            return array.filter((item) => item.productPrice > filters.price[0] && item.productPrice < filters.price[1]);
        } else {
            return array;
        }
    };

    const filterBySearchTerm = (array) => {
        if (filters.searchTerm.length > 0) {
            return array.filter((item) => item.productName.includes(filters.searchTerm));
        } else {
            return array;
        }
    };

    const filterByBrand = (array) => {
        if (filters.brand.length > 0) {
            return array.filter((item) => filters.brand.includes(item.productBrand));
        } else {
            return array;
        }
    };

    useEffect(() => {
        let result = productData;
        result = filterByCategory(result);
        result = filterByRating(result);
        result = filterByPrice(result);
        result = filterBySearchTerm(result);
        result = filterByBrand(result);
        setCurrentPage(1);
        setFinalProduct(result);
    }, [filters]);

    //Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = finalProduct.slice(indexOfFirstProduct, indexOfLastProduct);

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
                        <FilterPanel onChange={handleUpdateFilter} filters={filters} />
                    </div>
                    <div className={cx('product-field')}>
                        {currentProducts.length > 0 ? (
                            <>
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
                                    totalProduct={finalProduct.length}
                                    currPageNum={currentPage}
                                    lastPageNum={finalProduct.length / productsPerPage}
                                    paginate={paginate}
                                    prevPage={prevPage}
                                    nextPage={nextPage}
                                />
                            </>
                        ) : (
                            <div className={cx('product-search-empty')}>Sorry! No result found :{'('}</div>
                        )}
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
