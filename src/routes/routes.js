import config from '~/config';

// Pages
import Home from '~/pages/Home/Home';
import Product from '~/pages/Product/Product';
import About from '~/pages/About/About';
import Contact from '~/pages/Contact/Contact';
import Cart from '~/components/Cart/Cart';
import ProductDetail from '~/components/Product/ProductDetail';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.about, component: About },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.cart, component: Cart },
    { path: '/product/:id', component: ProductDetail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
