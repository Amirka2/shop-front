import styled from 'styled-components';

import {Color} from "@/shared/constants";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #e1e1e1;
  width: 55%;
  min-height: 200px;
  max-height: 90%;
  border-radius: 20px;
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  padding: 16px;
`

export const CloseModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  border-radius: 10px;
  font-size: 16px;
  color: ${Color.darkGray};
  background-color: #e1e1e1;
  align-self: flex-end;
  padding: 4.25px;
  cursor: pointer;
  &:hover{
    color: ${Color.black};
  }
`;

