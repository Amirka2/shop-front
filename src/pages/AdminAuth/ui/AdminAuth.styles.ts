import styled from 'styled-components';

import {Color} from "@/shared/constants";

export const AuthWrapper = styled.div`
  margin: 30px auto 0;
  width: 400px;
  
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 24px;
  font-weight: 300;
  
  border: 2px solid ${Color.gray};
  border-radius: 8px;
  
  &[type="password"] {
    color: ${Color.blue};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${Color.blue};
  color: ${Color.white};
  
  padding: 10px 0;
  border-radius: 16px;
  
  font-size: 26px;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;
