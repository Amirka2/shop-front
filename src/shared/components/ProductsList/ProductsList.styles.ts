import styled from "styled-components";

import {Color} from "@/shared/constants";

export const ProductsListWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;


export const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  list-style-type: none;
  color: ${Color.blue};
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
`;

export const ProductsListItem = styled.li`
    cursor: pointer;
  &:hover{
    font-size: 32px;
  }
`;