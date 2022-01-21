import React from 'react';
import cn from 'classnames';
import { Container, SendApplicationForm } from '../index';
import classes from './sendApplicationSection.module.scss';

const SendApplicationSection = ({ isSecondaryColor }) => {
    return (
        <section
            className={cn(classes.wrapper, {
                [classes.isSecondaryColor]: isSecondaryColor,
            })}
        >
            <Container width={45} widthLG={70} widthMD={90}>
                <SendApplicationForm variant={'default'} />
            </Container>
        </section>
    );
};

export default SendApplicationSection;
