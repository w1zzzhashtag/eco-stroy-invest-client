import React from 'react';
import { Container, InfoList, Title } from '../../../components';
import { SERVICES_DATA_FOR_MAIN_PAGE } from '../../../datas/servicesData';
import { Link } from 'react-router-dom';
import { SERVICES_ROUTE } from '../../../app/routes';
import classes from '../main.module.scss';

const Services = () => {
    return (
        <section className={classes.servicesSection}>
            <Container width={45} widthLG={70} widthMD={90}>
                <Title>
                    <b>
                        Позаботимся обо всём: <div>от дизайн-проекта до финальной уборки</div>
                    </b>
                </Title>

                <InfoList data={SERVICES_DATA_FOR_MAIN_PAGE} />
                <Link to={SERVICES_ROUTE} className={classes.link}>
                    Полный список услуг
                </Link>
            </Container>
        </section>
    );
};

export default Services;