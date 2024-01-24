import { styled } from "styled-components";
import { Color } from "@/shared/constants";

export const Wrapper = styled.div`
  width: 500px;
  min-height: 450px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Button = styled.button`
  background-color: ${Color.blue};
  
  width: 50px;
  height: 50px;
  border-radius: 10px;
  
  cursor: pointer;
`;

export const Input = styled.input`
  all: unset;
  
  min-width: 300px;
  padding: 0 8px;
  
  color: ${Color.blue};
  font-family: Ubuntu, sans-serif;
  font-size: 36px;
`;

export const EditIconButton = styled.button`
  background: ${Color.white};
`;

export const SavedPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  column-gap: 18px;
  row-gap: 8px;
`;

export const Photos = styled.div`
  width: 100%;
  height: calc(100% + 150px);
  border: 1px solid black;
  border-radius: 10px;
`;

export const Footer = styled.div`
  width: 360px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
