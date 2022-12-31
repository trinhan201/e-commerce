import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import WebLoading from './components/WebLoading';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const loadingId = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(loadingId);
    }, []);

    return (
        <Router>
            <div className="App">
                {loading ? (
                    <WebLoading />
                ) : (
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                )}
            </div>
        </Router>
    );
}

export default App;
