import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const InteractionPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SumInfo = styled.span`
  color: ${Color.blue};
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 20px;
`;

export const CounterWithButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${Color.blue};
  display: flex;
  padding: 4.25px;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    outline: 2px solid ${Color.blue};
  }
`;
