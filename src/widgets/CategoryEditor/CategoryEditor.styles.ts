import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  gap: 4px;
  
  margin-top: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  
  line-height: 30px;
  font-size: 22px;
  
  border-radius: 8px;
  
  outline: none;
  border: none;
`;

export const PhotoWrapper = styled.div`
  width: fit-content;
`;
