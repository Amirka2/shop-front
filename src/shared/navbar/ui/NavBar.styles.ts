import {styled} from "styled-components";
import {NavLink} from "react-router-dom";

export const Wrapper = styled.div`
  width: 1330px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F0F0F0;
  border-radius: 10px;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 24px;
`;
