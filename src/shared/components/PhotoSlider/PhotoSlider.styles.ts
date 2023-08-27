import {styled} from 'styled-components';

export const Wrapper = styled.div<{
    width: number,
    height: number,
}>`
  width: ${props => props.width + 'px'} | '200px';
  height: ${props => props?.height + 'px'} | '200px';
  & img {
    width: 100%;
    height: 100%;
  }
  & button.slick-arrow {
    z-index: 1;
    background-color: black;
    border-radius: 50%;
  }
`;

export const ImgWrapper = styled.div`
  
`;
