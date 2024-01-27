import styled from 'styled-components';
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 700px;
  flex-direction: column-reverse;
    
    ${mediaQueries.gt.Tablet} {
        width: 60%;
        flex-direction: row;
    }
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 600px; /* Максимальная высота для миниатюр */
  overflow-y: auto; /* Добавьте прокрутку, если миниатюры не помещаются */

    ${mediaQueries.gt.Tablet} {
        flex-direction: column;
    }
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

  min-width: 110px; /* Минимальная ширина для миниатюры */
  min-height: 135px; /* Минимальная высота для миниатюры */

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
