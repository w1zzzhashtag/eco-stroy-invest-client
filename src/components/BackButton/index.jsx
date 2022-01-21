import React from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import classes from './backButton.module.scss';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();
    const handleClick = () => history.goBack();

    return (
        <Button type="link" className={classes.button} onClick={handleClick}>
            <CloseOutlined />
        </Button>
    );
};

export default BackButton;
