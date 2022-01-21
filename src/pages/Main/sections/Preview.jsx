import React from 'react';
import { Container, InfoList, Title } from '../../../components';
import { Button } from 'antd';
import classes from '../main.module.scss';
import { useHistory } from 'react-router-dom';
import { SEND_APPLICATION_ROUTE } from '../../../app/routes';
import { PREVIEW_DATA_FOR_MAIN_PAGE } from '../../../datas/previewData';

const Preview = () => {
    const history = useHistory();
    const goToSendApplicationPage = () => {
        history.push(SEND_APPLICATION_ROUTE);
    };
    return (
        <section className={classes.previewSection}>
            <Container widthLG={90}>
                <Title variant="h1">Капитальный ремонт квартир по индивидуальному дизайн‑проекту</Title>
                <Button className={classes.previewSection__button} type="primary" onClick={goToSendApplicationPage}>
                    Узнать стоимость
                </Button>

                <div className={classes.previewSection__list}>
                    <InfoList data={PREVIEW_DATA_FOR_MAIN_PAGE} isFullFilled />
                </div>
            </Container>
        </section>
    );
};

export default Preview;
