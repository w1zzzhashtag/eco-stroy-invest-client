import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Container, InfoList, Title } from '../../../components';
import { HOW_MATCH_DATA_FOR_MAIN_PAGE } from '../../../datas/howMatchData';
import { SEND_APPLICATION_ROUTE } from '../../../app/routes';
import classes from './../main.module.scss';

const HowMatch = () => {
    const history = useHistory();
    const goToSendApplicationPage = (variant) => {
        history.push(SEND_APPLICATION_ROUTE, { variant });
    };
    return (
        <section className={classes.howMatchSection}>
            <Container width={30} widthLG={50} widthMD={80} widthSM={85}>
                <Title>
                    <b>Как узнать стоимость ремонта?</b>
                </Title>
                <InfoList data={HOW_MATCH_DATA_FOR_MAIN_PAGE} isFullFilled />
                <div className={classes.howMatchSection__button_wrapper}>
                    <Button
                        type="primary"
                        className={classes.howMatchSection__button}
                        onClick={() => goToSendApplicationPage('measurerCall')}
                    >
                        Вызвать замерщика
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default HowMatch;
