import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Button = styled.button`
  max-width: 200px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  background-color: ${Color.blue};
  color: ${Color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: 0 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: 0 5px 5px -5px rgba(34, 60, 80, 0.6) inset;

    &:disabled {
        background-color: ${Color.darkGray};
        cursor: inherit;
    }
`;
