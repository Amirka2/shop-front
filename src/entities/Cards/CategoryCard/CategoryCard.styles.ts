import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const CategoryInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
`;

export const Title = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 1.3em;
  
  &:hover {
    transition-duration: 1s;
    color: ${Color.blue};
  }
`;

export const Count = styled.span`
  color: ${Color.blue};
  font-family: Inter, sans-serif;
  font-weight: 700;
`;
