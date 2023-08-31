import {styled} from "styled-components";
import {Colors} from "@/shared/constants";

export const Button = styled.button`
  max-width: 200px;
  width: 100%;
  height: 25px;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${Colors.blue};
  color: ${Colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;
