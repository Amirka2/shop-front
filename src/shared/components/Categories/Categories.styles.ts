import { Color } from "@/shared/constants";
import {styled} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & span {
    margin: 20px 0;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const CategoryItem = styled.li`
  font-size: 20px;
  & a:hover {
    color: ${Color.blue};
  }
`;

export const Button = styled.button`
  font-size: 24px;
  background-color: transparent;
  color: ${Color.darkGray};
  margin-top: 20px;
  cursor: pointer;
`;
