import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { withLoaderContext } from '../../HOCs/withLoaderContext';
import classes from './loader.module.scss';

const Loader = ({ isLoading }) => {
    return isLoading ? (
        <div className={classes.wrapper}>
            <Spin indicator={<LoadingOutlined className={classes.wrapper__icon} spin />} />
        </div>
    ) : null;
};

export default withLoaderContext(Loader);
