import { styled } from 'styled-components';

export const Wrapper = styled.div`
  
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  margin-bottom: 20px;
`;

export const MainInfoWrapper = styled.div`
  width: 50%;
`;

export const PartitionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  all: unset;
  
  width: 100%;
  min-height: 550px;
  
  padding: 16px;

  border-radius: 10px;
  background: #FFF;
  box-shadow: 6px 3px 53px 0px rgba(0, 0, 0, 0.10);
`;
