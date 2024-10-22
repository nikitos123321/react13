import style from './FadeSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export function FadeSlider() {
    {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
        };
        return (
            <>
                <div className={style.t}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className={style.item}>
                                <img src='https://www.bmw.tm/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg' />
                            </div>
                            <div className={style.item}>
                                <img src='https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/09/28/02/5602932/18f509e7c1a7511c978e090d30974f1825123bd1.jpg    ' />
                            </div>
                            <div className={style.item}>
                                <img src='https://www.bmwusa.com/content/dam/bmw/common/limited-edition/2024/soc25/m4-cs/BMW-LimitedEdition-M4-CSL-all.jpg.bmwimg.small.jpg' />
                            </div>
                            <div className={style.item}>
                                <img src='https://www.bmw-kz.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-08.jpg' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </>

        );
    }
}
