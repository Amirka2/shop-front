import {styled} from "styled-components";
import {Colors} from "@/shared/constants";

export const Wrapper = styled.div`
  height: 50px;
  width: 189px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Select = styled.select`
  font-size: 24px;
  color: ${Colors.gray};
  font-family: Inter, sans-serif;
  padding: 5px;
  appearance: none;
  background-color: transparent;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
  & > option {
  }
`;
