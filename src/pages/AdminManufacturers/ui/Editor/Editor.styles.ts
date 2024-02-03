import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const EditorWindow = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 16px;
  background-color: ${Color.gray};
  justify-self: flex-end;
`;

export const NameInput = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 16px;
  border: 1px solid ${Color.black};
  font-size: 24px;
`;

export const SaveButton = styled.button`
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
`;
