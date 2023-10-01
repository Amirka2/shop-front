import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  min-height: 50vh;
`;

export const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

export const MetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-size: 32px;
  align-self: flex-start;
`;

export const Products = styled.div`
  display: flex;
  gap: 32px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const AddSubCategory = styled.button`
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 20px;
  border-radius: 16px;
  
  &:hover {
    transform: scale(105%);
  }
`;

export const EditorWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 8px;
  border-radius: 16px;
  background-color: ${Color.gray};
`;

export const Editor = styled.input`
  min-width: 300px;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid ${Color.black};
`;

export const SaveButton = styled.button`
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 10px;
  border-radius: 8px;
`;
