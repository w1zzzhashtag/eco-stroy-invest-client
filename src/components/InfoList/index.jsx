import React from 'react';
import cn from 'classnames';
import classes from './infoList.module.scss';

const InfoList = ({ data, isFullFilled, isNumeric }) => {
    return (
        <div
            className={cn(classes.wrapper, {
                [classes.isFullFilled]: isFullFilled,
            })}
        >
            {data.map((item, i) => (
                <div key={i} className={classes.item}>
                    <span className={classes.item__prefix}>{isNumeric ? `${i + 1}. ` : '-'}</span>
                    <p className={classes.item__title}>{item.title}</p>
                    {item.desc &&
                        (Array.isArray(item.desc) ? (
                            item.desc.map((descItem, descIndex) => (
                                <p key={descIndex} className={classes.item__desc}>
                                    {descItem}
                                </p>
                            ))
                        ) : (
                            <p className={classes.item__desc}>{item.desc}</p>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default InfoList;
