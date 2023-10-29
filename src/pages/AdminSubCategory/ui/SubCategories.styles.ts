import { styled } from 'styled-components';
import { Color } from "@/shared/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
