import {styled} from 'styled-components';
import {Colors} from "@/shared/constants";

export const MainWrapper = styled.div`
  width: 1400px;
  height: 100vh;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: ${Colors.black};
  background-color: ${Colors.white};
`;