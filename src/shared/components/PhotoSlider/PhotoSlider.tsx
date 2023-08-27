import React from 'react';
import {ImgWrapper, Wrapper} from './PhotoSlider.styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PhotoSliderProps {
    photos: Array<string>;
    width: number;
    height: number;
}

export const PhotoSlider = ({photos, width, height}: PhotoSliderProps) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        arrows: false,
    }
    const photoItems = photos.map(url => {
        return (
            <ImgWrapper>
                <img src={url} alt={'product photo'}/>
            </ImgWrapper>
        )
    })
    return (
        <Wrapper width={width} height={height}>
            <Slider {...settings}>
                {photoItems}
            </Slider>
        </Wrapper>
    );
};
