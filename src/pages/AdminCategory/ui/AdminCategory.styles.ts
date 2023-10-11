import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  min-height: 50vh;
  width: 100%;
  min-width: 1000px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const AddCategoryWrapper = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const AddCategory = styled.button`
  max-width: 60px;
  max-height: 60px;
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 20px;
  border-radius: 16px;
  
  &:hover {
    transform: scale(105%);
  }
`;

export const EditorWindow = styled.div`
  max-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 8px;
  border-radius: 16px;
  background-color: ${Color.gray};
  justify-self: flex-end;
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
