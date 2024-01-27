import { styled } from 'styled-components';
import { Color } from "@/shared/constants";

export const Wrapper = styled.div`
  min-width: 1240px;
  width: 100%;
  height: 100px;
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 10px;
  border-radius: 10px;
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const PhotoWrapper = styled.div`
  width: 70px;
  height: 85px;
  background-color: ${Color.white};
  border-radius: 10px;
  overflow: hidden;
`;

export const MainPhoto = styled.img`
  min-width: 100%;
  max-height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const MainText = styled.h3`
  width: 250px;
  text-align: center;
  font-size: 20px;
`;

export const Description = styled.p`
  height: 70px;
  max-width: 500px;
  font-size: 14px;
`;

export const InStockToggler = styled.div`
  height: 15px;
  width: 42px;
  
  display: flex;
  justify-content: space-between;
`;

export const CircleButton = styled.button<{ color: string }>`
  background: ${({ color }) => color};
  
  height: 14px;
  width: 14px;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background: ${({ color }) => `rgba(${color}, 0.5)`};
  }
`;

export const DeleteIconWrapper = styled.button`
  background-color: ${Color.white};
  border-radius: 8px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
