import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout, ScrollTop } from '../components';
import { ROUTES } from './routes';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './app.scss';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

ConfigProvider.config({
    theme: {
        primaryColor: '#1DB954',
    },
});

const App = () => {
    const location = useLocation();
    return (
        <ConfigProvider locale={ruRU}>
            <ScrollTop />
            <Layout>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.key}>
                        {ROUTES.map(({ path, component, exact }) => (
                            <Route key={path} exact={!!exact} path={path} component={component} />
                        ))}
                    </Switch>
                </AnimatePresence>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
