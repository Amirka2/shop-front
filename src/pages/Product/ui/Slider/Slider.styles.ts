import styled from 'styled-components';

export const SliderContainer = styled.div<{
    isMobile?: boolean;
}>`
  display: flex;
  align-items: center;
  width: ${props => props.isMobile ? '100%' : '60%'};
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 600px; /* Максимальная высота для миниатюр */
  overflow-y: auto; /* Добавьте прокрутку, если миниатюры не помещаются */
`;

export const ThumbnailImage = styled.img`
  width: 50px;
  height: auto;
  cursor: pointer;
  margin-bottom: 10px;
  border: 2px solid transparent;
  transition: border-color 0.2s;

  &.active {
    border-color: #007bff;
  }

  min-width: 135px; /* Минимальная ширина для миниатюры */
  min-height: 50px; /* Минимальная высота для миниатюры */
`;

export const MainSlide = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.img`
  max-width: 400px; /* Максимальная ширина для главной фотографии */
  max-height: 300px; /* Максимальная высота для главной фотографии */
  width: auto;
  height: auto;

  min-width: 400px; /* Минимальная ширина для главной фотографии */
  min-height: 300px; /* Минимальная высота для главной фотографии */
`;
