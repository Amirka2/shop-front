import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%;
`;

export const ModalInput = styled.input`
  position: absolute;
  top: 40px;
  resize: none;
  width: 45%;
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
    overflow: auto;
`;
