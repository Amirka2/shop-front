import styled from 'styled-components';

export const SliderContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isMobile'].includes(prop)
})<{ isMobile?: boolean; }>`
  display: flex;
  align-items: center;
  width: ${props => props.isMobile ? '100%' : '60%'};
  height: 700px;
  flex-direction: ${props => props.isMobile ? 'column-reverse' : 'row'};
`;

export const Thumbnails = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isMobile'].includes(prop)
})<{ isMobile?: boolean; }>`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'row' : 'column'};
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
  min-height: 150px; /* Минимальная высота для миниатюры */

  max-width: 135px; 
  max-height: 150px; 
`;

export const MainSlide = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImage = styled.img`
  max-width: 400px; /* Минимальная ширина для миниатюры */
  max-height: 400px;
`;
