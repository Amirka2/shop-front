import {styled} from "styled-components";

import {Color} from "@/shared/constants";
import {Button} from "@/shared/ui";

export const Wrapper = styled.main`
  width: 100%;
`;

// TODO исправить размеры кнопки на незахардкоженные
export const BackButton = styled.button`
  background-color: transparent;
  max-width: 70px;
  max-height: 70px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  margin-top: 135px;
  display: flex;
  min-width: 500px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Photo = styled.img`
  width: 100px;
  height: 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${Color.blue};

  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddCategoryWrapper = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const AddCategory = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${Color.blue};
  color: ${Color.white};
  padding: 20px;
  border-radius: 10px;
  font-weight: 700;
  
  margin-top: 35px;

  &:hover {
    transform: scale(105%);
  }
`;

export const DeleteButton = styled(Button)`
  font-size: 18px;
  width: 40px;
  height: 40px;
`;
