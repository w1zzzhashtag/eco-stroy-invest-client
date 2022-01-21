import React from 'react';
import { Link } from 'react-router-dom';
import { Container, InfoList, Title } from '../../../components';
import { RENOVATION_PROCESS_DATA_FOR_MAIN_PAGE } from '../../../datas/renovationProcessData';
import { RENOVATION_PROCESS_ROUTE } from '../../../app/routes';
import classes from './../main.module.scss';

const Process = () => {
    return (
        <section className={classes.renovationProcessSection}>
            <Container width={45} widthLG={60} widthMD={85}>
                <Title>
                    <b>Вы можете быть спокойны за сроки и качество работ</b>
                </Title>

                <InfoList data={RENOVATION_PROCESS_DATA_FOR_MAIN_PAGE} isFullFilled />

                <Link to={RENOVATION_PROCESS_ROUTE} className={classes.link}>
                    Как устроен процесс ремонта?
                </Link>
            </Container>
        </section>
    );
};

export default Process;
