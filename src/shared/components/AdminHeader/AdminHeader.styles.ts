import { styled } from "styled-components";
import {Color} from "@/shared/constants";

const BACK_BUTTON_SIZE = 70;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 140px;`;

export const Title = styled.h1`
  color: ${Color.blue};
`;

export const Placeholder = styled.div`
  width: ${BACK_BUTTON_SIZE}px;
  height: ${BACK_BUTTON_SIZE}px;
`;

export const BackButton = styled.button`
  background-color: transparent;
  max-width: ${BACK_BUTTON_SIZE}px;
  max-height: ${BACK_BUTTON_SIZE}px;
  cursor: pointer;
`;
