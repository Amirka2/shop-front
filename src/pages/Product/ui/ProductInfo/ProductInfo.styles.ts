import styled from 'styled-components';
import {Color} from '@/shared/constants';
import {mediaQueries} from "@/shared/constants/mediaQueries";

export const Wrapper = styled.div`
  width: 50%;
  min-width: 350px;
  max-width: 500px; 
  
  ${mediaQueries.gt.Tablet} {
    width: 100%;
  }
`;

export const ProductName = styled.h4`
  color: ${Color.blue};
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const ProductAvailability = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${Color.black};
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  color: ${Color.black};
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductPrice = styled.span`
    color: ${Color.blue};
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    white-space: pre-wrap;
    line-height: normal;
  
  & span {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const YesText = styled.span`
    color: ${Color.blue}; // Зеленый цвет для "Да"
`;

export const NoText = styled.span`
    color: ${Color.darkGray}; // Красный цвет для "Нет"
`;

export const AddToCartButton = styled.button`
  height: 72px;
  width: 100%;
  background-color: ${Color.blue};
  color: ${Color.white};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 20px 0;
  cursor: pointer;
`;
