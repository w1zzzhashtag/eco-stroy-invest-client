import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';
import { PHONE_NUMBER_TEXT, PHONE_NUMBER_HREF } from '../../common/constants';
import { Button } from 'antd';
import { SEND_APPLICATION_ROUTE } from '../../app/routes';
import classes from './feedbackBar.module.scss';

const FeedbackBar = () => {
    const history = useHistory();
    const goToSendApplicationPage = (variant) => {
        history.push(SEND_APPLICATION_ROUTE, {
            variant
        });
    };

    return (
        <div className={classes.wrapper}>
            <Button type="link" className={classes.link} onClick={() => goToSendApplicationPage('backCall')}>
                Закажите обратный звонок
            </Button>
            или позвоните
            <a href={PHONE_NUMBER_HREF} className={cn(classes.link, classes.mr0)}>
                {PHONE_NUMBER_TEXT}
            </a>
            . Работаем без выходных
        </div>
    );
};

export default FeedbackBar;
