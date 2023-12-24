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
  display: flex;
  flex-direction: column;
  background-color: #e1e1e1;
  width: 55%;
  height: 92%;
  padding: 10px;
  border-radius: 20px;
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  overflow: hidden;
`

export const CloseModalButton = styled.button`
  width: 5%;
  height: 5%;
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

