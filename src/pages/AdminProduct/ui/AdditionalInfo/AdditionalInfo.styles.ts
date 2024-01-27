import styled from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  
  color: ${Color.blue};
  //font-style: italic;
  font-size: 28px;
  
  height: 50px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Description = styled.textarea`
  font-size: 18px;
  
  padding: 8px;
  min-height: 140px;
  border-radius: 8px;
  
  resize: none;
  outline: none;
`;

export const InStockWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InStock = styled.input`
  display: flex;
  align-items: center;
`;
