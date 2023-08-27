import { Colors } from "@/shared/constants";
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

export const Ul = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const Li = styled.li`
  font-size: 20px;
  color: ${Colors.black};
`;
