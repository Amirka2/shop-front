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
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  gap: 8px;
`;

export const Photo = styled.img`
  width: 40px;
  height: 40px;
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
  margin: 20px 10px 0;
`;

export const AddSubCategory = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 5px;
  border-radius: 10px;
  font-weight: 700;
  
  &:hover {
    transform: scale(105%);
  }
`;

export const DeleteButton = styled(Button)`
  font-size: 18px;
  
  margin-left: 10px;
`;
