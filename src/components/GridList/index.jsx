import React from 'react';
import classes from './gridList.module.scss';
import { GridListItem } from '../index';

const GridList = ({ data }) => {
    return (
        <div className={classes.list}>
            {data.map((data) => (
                <GridListItem key={data.id} data={data} />
            ))}
        </div>
    );
};

export default GridList;
