import { styled } from 'styled-components';
import { Color } from "@/shared/constants";

const BACK_BUTTON_SIZE = 70;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 140px;
`;

export const BreadCrumbs = styled.h1`
  color: ${Color.blue};
  text-transform: capitalize;
`;

export const Placeholder = styled.div`
  width: ${BACK_BUTTON_SIZE}px;
  height: ${BACK_BUTTON_SIZE}px;
`;

export const BackButton = styled.button`
  background-color: transparent;
  max-width: ${BACK_BUTTON_SIZE}px;
  max-height: ${BACK_BUTTON_SIZE}px;
  cursor: pointer;
`;

export const AddButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: ${Color.blue};
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
