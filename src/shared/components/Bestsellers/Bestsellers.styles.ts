import styled from "styled-components";
import {Color} from "@/shared/constants";

export const BestsellersWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const BestsellersAddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  background-color: ${Color.blue};
  display: flex;
  padding: 4.25px;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${Color.white};
  font-size: 32px;
  text-align: center;

  &:hover {
    outline: 2px solid ${Color.blue};
  }
`;

export const BestsellersListTitle = styled.span`
  color: ${Color.blue};
  font-size: 36px;
  font-weight: 400;
  line-height: normal;
`;

export const BestsellersAddContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AllBestsellersContent = styled.ul`
    
`;

export const BestsellersList = styled.ul `
  display: flex;
  flex-direction: column;
  gap: 10px;

  list-style-type: none;
  color: ${Color.blue};
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
`;

export const BestsellersListItem = styled.li`
    cursor: pointer;
  &:hover{
    font-size: 32px;
  }
`;