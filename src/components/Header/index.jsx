import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { PHONE_NUMBER_HREF, PHONE_NUMBER_TEXT } from '../../common/constants';
import { BASE_ROUTE, MENU_ROUTE } from '../../app/routes';
import { Container } from '../index';
// import logo from './../../assets/images/logo.jpg';
import classes from './header.module.scss';

const Header = () => {
    const history = useHistory();

    const handleOpenMenu = () => history.push(MENU_ROUTE);

    return (
        <header className={classes.wrapper}>
            <Container width={85} widthLG={90}>
                <div className={classes.content}>
                    <Link to={BASE_ROUTE} className={classes.logo}>
                        ЭкоСтройИнвест
                        {/*<img src={logo} alt="ЭкоСтройИнвест" className={classes.logo__img} />*/}
                    </Link>
                    <div className={classes.burger_wrapper}>
                        <a href={PHONE_NUMBER_HREF} className={classes.burger_wrapper__phone}>
                            {PHONE_NUMBER_TEXT}
                        </a>
                        <Button type="link" className={classes.burger} onClick={handleOpenMenu}>
                            <MenuOutlined />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
