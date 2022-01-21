import React from 'react';
import { INSTAGRAM, WHATS_APP } from '../../common/constants';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import classes from './socials.module.scss';

const Socials = () => {
    return (
        <div className={classes.wrapper}>
            <a href={`https://wa.me/${WHATS_APP}`} className={classes.item} target="_blank" rel="noreferrer">
                <WhatsAppOutlined />
            </a>
            <a href={INSTAGRAM} className={classes.item} target="_blank" rel="noreferrer">
                <InstagramOutlined />
            </a>
        </div>
    );
};

export default Socials;
