import {styled} from "styled-components";
import {Colors} from "@/shared/constants";

export const Wrapper = styled.div`
  width: 1330px;
  min-height: 150px;
  height: 150px;
  margin: 0 0 20px 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue};
  border-radius: 20px;
`;
