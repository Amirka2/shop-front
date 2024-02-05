import { styled } from 'styled-components';
import { Link } from "react-router-dom";

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

export const Label = styled.span`
  color: ${Color.white};
  text-align: center;
  
  font-size: 20px;
`;

export const PriorityBlock = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 4px;
`;

export const PriorityWrapper = styled.div`
  display: flex;  
  gap: 4px;
`;

export const Priority = styled.input`
  width: 70px;
  height: 30px;
  background-color: ${Color.white};
  border-radius: 10px;
  
  text-align: center;
  
  outline: none;
  border: none;
`;

export const SavePriorityChange = styled.button`
  background: transparent;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const PhotoWrapper = styled.div`
  width: 70px;
  height: 85px;
  background-color: ${Color.white};
  border-radius: 10px;
  overflow: hidden;
`;

export const MainPhoto = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledLink = styled(Link)`
  &:hover {
    transform: scale(1.1);
  }
`;

export const MainText = styled.h3`
  width: 250px;
  text-align: center;
  font-size: 20px;
  color: ${Color.white};
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

  &:hover {
    transform: scale(1.1);
  }
`;
