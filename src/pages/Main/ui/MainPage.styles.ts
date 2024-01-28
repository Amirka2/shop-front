import {styled} from "styled-components";
import {MainWrapper} from "@/shared/components";

export const Wrapper = styled(MainWrapper)`
  & aside {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 30px;
  }
`;
