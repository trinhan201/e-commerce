import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';
import productData from '~/data';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function ProductDetail() {
    const { id } = useParams();
    const thisProduct = productData.find((item) => item.id === Number(id));
    return (
        <div className={cx('container')}>
            <div className={cx('product-detail-wrapper')}>
                <div className={cx('product-detail-img')}>
                    <img src={thisProduct.productImg} alt="" />
                </div>
                <div className={cx('product-detail-info')}>
                    <h1 className={cx('product-detail-name')}>{thisProduct.productName}</h1>
                    <p className={cx('product-detail-desc')}>{thisProduct.productDesc}</p>
                    <p className={cx('product-detail-price')}>${thisProduct.productPrice}</p>
                    <div className={cx('product-detail-qty')}>
                        <div className={cx('qty-minus')}>-</div>
                        <div className={cx('qty-num')}>1</div>
                        <div className={cx('qty-plus')}>+</div>
                    </div>
                    <div className={cx('product-detail-btn')}>
                        <Button primary>ADD TO CART</Button>
                        <Button className={cx('ml-15')} outline>
                            BUY NOW
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
