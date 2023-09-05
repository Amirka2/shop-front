import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div<{
    isMobile?: boolean;
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
`;

export const ProductPhoto = styled.img`
  max-width: 130px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 10px;
  gap: 10px;
`;

export const Name = styled.h4`
  color: ${Color.blue};
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 900;
  line-height: 28px;
`;
