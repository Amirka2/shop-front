import styled from 'styled-components';
import {Color} from "@/shared/constants";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-left: 50px;
`;

export const SubCategory = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
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
