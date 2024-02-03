import styled from 'styled-components';
import {Color} from "@/shared/constants";
import { Link } from 'react-router-dom';
import {Button} from "@/shared/ui";

export const Wrapper = styled.div`
  display: flex;
  margin-left: 50px;
`;

export const SubCategory = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledLink = styled(Link)`
  color: ${Color.blue};
`;

export const Title = styled.h3`
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubCategories = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 8px;
`;

export const AddSubCategory = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 5px;
  border-radius: 10px;
  font-weight: 700;
  
  margin-top: 25px;
  
  &:hover {
    transform: scale(105%);
  }
`;

export const DeleteButton = styled(Button)`
  font-size: 18px;
  height: 40px;
  width: 40px;
  padding: 0;
`;
