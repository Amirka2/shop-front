import {css, styled} from "styled-components";
import { Color } from "@/shared/constants";

export const Wrapper = styled.div`
  width: 350px;
  
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  color: ${Color.blue};

  font-family: Ubuntu, sans-serif;
  font-size: 36px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  
  background: ${Color.blue};

  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  
  background: ${Color.white};

  cursor: pointer;
`;

export const PartitionBlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PartitionBlock = styled.div<{
  isActive?: boolean;
}>`
  width: 100%;
  height: 50px;
  padding: 0 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background: ${Color.blue};
  border-radius: 10px;
  
  ${({isActive}) => isActive ? css`
    outline: 4px solid ${Color.blue};
    outline-offset: -2px;
  ` : null}
`;

export const PartitionTitle = styled.input`
  outline: none;
  border: none;
  
  color: ${Color.white};
  background-color: ${Color.blue};

  font-family: Ubuntu, sans-serif;
  font-size: 20px;
  font-weight: 400;
  
  margin-bottom: 8px;
`;
