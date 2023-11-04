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

export const Row = styled.input`
  min-width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${Color.blue};
  font-size: 24px;
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  
`;

export const Title = styled.h4`
  color: ${Color.blue};
  font-size: 20px;
  font-weight: 500;
`;

export const CheckButton = styled.button`
  width: 100%;
  color: ${Color.blue};
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Textarea = styled.textarea`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;


