import React from 'react';
import { motion } from 'framer-motion';
import { withLayoutContext } from '../../HOCs/withLayoutContext';
import { initialValuesLayoutContext } from '../../contexts/layoutContext';
import { DEFAULT_PAGE_MOTION } from '../../app/motionVariants';
import { Container, Title } from '../../components';
import classes from './services.module.scss';
import { SERVICES_DATA } from '../../datas/servicesData';

const Services = () => {
    return (
        <motion.main
            variants={DEFAULT_PAGE_MOTION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classes.wrapper}
        >
            <Container width={60} widthLG={90} widthMD={100}>
                <Title>
                    <b>Что входит в стоимость ремонта</b>
                </Title>
                <div className={classes.content}>
                    {SERVICES_DATA.map((item, itemIndex) => (
                        <div key={itemIndex} className={classes.item}>
                            <p className={classes.item__title}>{item.title}</p>
                            <div className={classes.item__info}>
                                {item.services.map((service, serviceIndex) => (
                                    <p key={serviceIndex}>{service}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className={classes.bottomText}>
                    Балконы и кухни не входят в стоимость, указанную на сайте. Вы сможете рассчитать их на встрече с
                    менеджером «ЭкоСтроИнвест».
                </p>
            </Container>
        </motion.main>
    );
};

export default withLayoutContext(Services, {
    ...initialValuesLayoutContext,
    isFullScreenPage: true,
    isWithoutBackButton: false,
});
