import React from 'react';
import { Container, Title } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import classes from '../main.module.scss';
import { DESIGN_DECISIONS } from '../../../datas/designDecisions';

SwiperCore.use([Navigation, Pagination]);

const DesignDecisions = () => {
    return (
        <section className={classes.designDecisionsSection}>
            <Container widthLG={90}>
                <Title>
                    <b>Квартира будет выглядеть так, как вы захотите.</b> Любые цвета и материалы
                </Title>

                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    className={classes.designDecisionsSection__slider}
                >
                    {DESIGN_DECISIONS.map((image, i) => (
                        <SwiperSlide key={i}>
                            <img
                                className={classes.designDecisionsSection__slider__image}
                                src={image}
                                alt="ЭкоСтройИнвест"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default DesignDecisions;
