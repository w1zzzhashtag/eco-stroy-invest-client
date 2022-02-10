import React from 'react';
import {
    Container,
    // GridList,
    Title
} from '../../../components';
// import { WORKS } from '../../../datas/worskData';
// import { Link } from 'react-router-dom';
// import { WORKS_ROUTE } from '../../../app/routes';
import classes from '../main.module.scss';

const Works = () => {
    return (
        <section className={classes.worksSection}>
            <Container widthLG={90}>
                <Title variant="h2">
                    <b>107 квартиры уже сделано, 5 ремонтируются прямо сейчас.</b> Посмотрите, как выглядят готовые
                    ремонты
                </Title>
                {/*<GridList data={[...WORKS, ...WORKS]} />*/}

                {/*<Link to={WORKS_ROUTE} className={classes.link}>*/}
                {/*    Посмотреть другие квартиры*/}
                {/*</Link>*/}
            </Container>
        </section>
    );
};

export default Works;