import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 10;
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
  height: 94%;
  padding: 10px;
  border-radius: 20px;
`
