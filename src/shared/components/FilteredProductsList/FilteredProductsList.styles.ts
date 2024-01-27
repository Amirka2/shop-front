import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center; 
  height: 100%;
  padding-top: 10px;
`;

export const ModalInput = styled.input`
  resize: none;
  width: 80%;
  height: 48px;
  font-size: 16px;
  padding: 13px;
  border: none;
  border-radius: 15px;
  background-color: #f6f6f6;
  &:focus {
    outline: none;
  }
`

export const ProductsContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  
  padding: 10px 0;
`;

export const LabelContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
