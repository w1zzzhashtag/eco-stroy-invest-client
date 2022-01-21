import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Container, Socials } from '../index';
import {
    ADDRESS_TEXT,
    ADDRESS_URL,
    EMAIL_HREF,
    EMAIL_TEXT,
    PHONE_NUMBER_HREF,
    PHONE_NUMBER_TEXT,
    PRIVACY_POLICY_URL,
} from '../../common/constants';
import { ROUTES } from '../../app/routes';
import classes from './footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <Container width={45} widthLG={70} widthMD={85} widthSM={100}>
                    <p className={cn(classes.text, classes.email)}>
                        <a href={EMAIL_HREF}>{EMAIL_TEXT}</a>
                    </p>
                    <p className={cn(classes.text, classes.phone)}>
                        <a href={PHONE_NUMBER_HREF}>{PHONE_NUMBER_TEXT}</a>
                    </p>
                    <p className={cn(classes.text, classes.address)}>
                        <a href={ADDRESS_URL}>{ADDRESS_TEXT}</a>
                    </p>

                    <Socials />

                    <nav className={classes.menu}>
                        {ROUTES.filter((route) => !!route.title).map((route) => (
                            <Link key={route.path} to={route.path} className={classes.menu__item}>
                                {route.title}
                            </Link>
                        ))}
                    </nav>
                </Container>
            </div>
            <div className={classes.separator} />
            <div className={classes.content}>
                <Container width={45} widthLG={70} widthMD={85} widthSM={100}>
                    <p className={classes.text}>2020–2022 © ЭкоСтройИнвест.</p>
                    <p className={classes.text}>
                        <a href={PRIVACY_POLICY_URL}>Политика конфиденциальности</a>
                    </p>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
