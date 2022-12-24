import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';
import productData from '~/data';

const cx = classNames.bind(styles);
function ProductDetail() {
    const { id } = useParams();
    const thisProduct = productData.find((item) => item.id === Number(id));
    return (
        <div>
            <h1>{thisProduct.productName}</h1>
            <p>Price: ${thisProduct.productPrice}</p>
            <p>{thisProduct.productDesc}</p>
        </div>
    );
}

export default ProductDetail;
