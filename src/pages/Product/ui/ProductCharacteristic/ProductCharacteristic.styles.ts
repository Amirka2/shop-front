import { Color } from '@/shared/constants';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2.88px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  color: ${Color.blue};
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DescriptionList = styled.ul`
  list-style-type: none;
  max-width: 700px;
`;

export const DescriptionListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 3px dotted ${Color.darkGray};
  color: ${Color.darkGray};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.88px;
`;

