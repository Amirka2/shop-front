import {styled} from "styled-components";
import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  margin: 30px 0;
  -webkit-box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  font-family: Inter, sans-serif;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const DescriptionHeaderLink = styled.a`
  padding: 10px;
  height: 40px;
  font-weight: bold;
  font-size: 1rem;
  color: ${Color.darkGray};
  
  &:hover {
    color: ${Color.black};
  }
`;

export const DescriptionPart = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DescriptionPartTitle = styled.h5`
  margin: 20px 0;
`;

export const DescriptionPartContent = styled.p`
  
`;