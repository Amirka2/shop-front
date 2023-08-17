import {styled} from "styled-components";
import {Colors} from '@/shared/constants'

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 630px;
  height: 630px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.blue};
  color: ${Colors.white};
`;
