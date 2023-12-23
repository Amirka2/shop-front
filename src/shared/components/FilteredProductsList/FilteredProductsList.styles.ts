import styled from "styled-components";
import {Color} from "@/shared/constants";

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin-top: 80px; 
`;

export const ModalInput = styled.input`
  position: absolute;
  top: 60px;
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

export const CloseModalButton = styled.button `
  width: 35px;
  height: 50px;
  border-radius: 10px;
  color: ${Color.white};
  background-color: ${Color.blue};
  display: flex;
  align-self: flex-end;
  padding: 4.25px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    outline: 2px solid ${Color.blue};
`;

export const ProductsContainer = styled.div `
  height: 500px;
  overflow-y: auto;
  padding: 20px;
`;
