import React from 'react';
import { Container } from '../index';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../app/routes';
import classes from './breadcrumbs.module.scss';

const Breadcrumbs = () => {
    const location = useLocation();
    const breadcrumbsItems = [];

    ROUTES.forEach((route) => {
        if (location.pathname.includes(route.path)) {
            breadcrumbsItems.push(route);
        }
    });

    if (breadcrumbsItems.length === 0) return null;

    return (
        <Container width={85} widthLG={90}>
            <div className={classes.wrapper}>
                {breadcrumbsItems.map((item, i) => (
                    <>
                        <Link key={item.path} to={item.path} className={classes.item}>
                            {item.title}
                        </Link>
                        {breadcrumbsItems.length - 1 !== i && <span className={classes.divider}>/</span>}
                    </>
                ))}
            </div>
        </Container>
    );
};

export default Breadcrumbs;
