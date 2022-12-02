import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import About from '~/pages/About';
import Contact from '~/pages/Contact';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.about, component: About },
    { path: config.routes.contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
