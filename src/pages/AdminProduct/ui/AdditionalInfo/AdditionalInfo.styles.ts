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
  margin-top: 5px;
  transform: scale(2);
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${Color.blue};
  font-size: 20px;
`;

export const Title = styled.h4`
  color: ${Color.blue};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
