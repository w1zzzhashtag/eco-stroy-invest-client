import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Redirect, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, FreeMode, Mousewheel } from 'swiper';
import { initialValuesLayoutContext } from '../../contexts/layoutContext';
import { withLayoutContext } from '../../HOCs/withLayoutContext';
import { WORKS } from '../../datas/worskData';
import { WORKS_ROUTE } from '../../app/routes';
import { DEFAULT_PAGE_MOTION } from '../../app/motionVariants';
import classes from './workDetails.module.scss';

SwiperCore.use([Navigation, Thumbs, FreeMode, Mousewheel]);

const WorksDetails = () => {
    const { id } = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const foundedItem = WORKS.find((w) => w.id === +id);

    return (
        <motion.main
            className={classes.wrapper}
            variants={DEFAULT_PAGE_MOTION}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            {foundedItem ? (
                <>
                    <Swiper
                        thumbs={{ swiper: thumbsSwiper }}
                        navigation={true}
                        mousewheel={true}
                        className={classes.swiperTop}
                    >
                        {foundedItem.images.map((image, i) => (
                            <SwiperSlide key={i}>
                                <img src={image} alt="ЭкоСтроИнвест" className={classes.swiperTop__image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={5}
                        spaceBetween={20}
                        freeMode={true}
                        watchSlidesProgress={true}
                        className={classes.swiperBottom}
                    >
                        {foundedItem.images.map((image, i) => (
                            <SwiperSlide key={i}>
                                <img src={image} alt="ЭкоСтроИнвест" className={classes.swiperBottom__image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                <Redirect to={WORKS_ROUTE} />
            )}
        </motion.main>
    );
};

export default withLayoutContext(WorksDetails, {
    ...initialValuesLayoutContext,
    isFullScreenPage: true,
    isWithoutBackButton: false,
});
