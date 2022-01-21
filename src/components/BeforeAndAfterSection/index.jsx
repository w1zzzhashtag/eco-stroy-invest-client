import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Container, Title } from '../index';
import classes from './beforeAndAfterSection.module.scss';
import { BEFORE_AND_AFTER_DATA } from '../../datas/beforeAndAfterData';

SwiperCore.use([Navigation]);

const BeforeAndAfterSection = () => {
    return (
        <section className={classes.wrapper}>
            <Container widthLG={90}>
                <Title variant="h2">
                    <b>Квартиры до и после ремонта «ЭкоСройИнвест»</b>
                </Title>

                <Swiper navigation={true}>
                    {BEFORE_AND_AFTER_DATA.map((imagesArr, i) => (
                        <SwiperSlide key={i}>
                            <div className={classes.slider__inner}>
                                <img src={imagesArr[0]} alt="ЭкоСтройИнвест" className={classes.slider__item} />
                                <img src={imagesArr[1]} alt="ЭкоСтройИнвест" className={classes.slider__item} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default BeforeAndAfterSection;
