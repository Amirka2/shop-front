import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const EditorWindow = styled.div`
  max-height: min-content;
  max-width: min-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 16px;
  background-color: ${Color.gray};
`;

export const Editor = styled.input`
  min-width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${Color.blue};
  font-size: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const Title = styled.h4`
  color: ${Color.blue};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const CheckButton = styled.button`
  
`;

