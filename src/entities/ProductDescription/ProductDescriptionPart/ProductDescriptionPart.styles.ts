import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const DescriptionPart = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DescriptionPartTitle = styled.h5`
  margin: 20px 0;
`;

export const DescriptionPartContentWrapper = styled.p`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DescriptionPartText = styled.p`
  font-family: Inter, sans-serif;
`;

export const DescriptionPartList = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
`;

export const DescriptionPartListItem = styled.li`
  line-height: 22px;
  margin-bottom: 10px;
  font-size: 16px;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${Color.blue};
    -webkit-border-radius: 2px;
    border-radius: 2px;
    top: 7px;
    left: 0;
  }
`;

export const DescriptionPartSpecifications = styled.p`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  & > span {
    font-size: 20px;
  }
`;
