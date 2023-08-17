import {styled} from "styled-components";
import {NavLink} from "react-router-dom";
import {Colors} from "@/shared/constants";

export const Wrapper = styled.div`
  width: 1330px;
  min-height: 50px;
  height: 50px;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${Colors.gray};
  border-radius: 10px;
`;

export const Link = styled(NavLink)`
  color: ${Colors.black};
  text-decoration: none;
  font-size: 24px;
`;
