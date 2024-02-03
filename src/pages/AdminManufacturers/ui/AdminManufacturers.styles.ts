import styled from "styled-components";
import {Cross} from "@/shared/ui";
import {Color} from "@/shared/constants";

export const EditorWrapper = styled.div`
  max-width: 400px;
  
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;

  color: ${Color.blue};
  //font-style: italic;
  font-size: 28px;

  height: 50px;
`;

export const ItemListElement = styled.li`
  list-style-type: none;
`;

export const ItemWrapper = styled.div`
  max-height: 40px;
  
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  
`;

export const DeleteIcon = styled(Cross)`
  cursor: pointer;
  
  &:hover path {
    stroke: ${Color.blue};
  }
`;
