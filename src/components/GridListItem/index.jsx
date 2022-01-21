import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tooltip } from 'antd';
import { WORKS_ROUTE } from '../../app/routes';
import classes from './gridListItem.module.scss';

const GridListItem = ({ data }) => {
    const history = useHistory();
    const goToDetailsPage = () => {
        history.push(`${WORKS_ROUTE}/${data.id}`);
    };

    return (
        <div className={classes.item}>
            <img className={classes.image} onClick={goToDetailsPage} src={data.images[0]} alt="ЭкоСтройИнвест" />
            <div className={classes.info}>
                <Tooltip title={data.title}>
                    <div className={classes.info__title} onClick={goToDetailsPage}>
                        {data.title}
                    </div>
                </Tooltip>
                <Tooltip title={data.desc}>
                    <div className={classes.info__desc} onClick={goToDetailsPage}>
                        {data.desc}
                    </div>
                </Tooltip>
            </div>
        </div>
    );
};

export default GridListItem;
