import styled from 'styled-components'

import {mediaQueries} from '@/shared/constants/mediaQueries';

import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 24px 50px 0 50px;
  display: none;
  position: relative;
  
  ${mediaQueries.gt.Tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const MainWrapper = styled.footer`
  width: 100vh;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background: linear-gradient(180deg, #225479 0%, #12446A 100%);
  
  ${mediaQueries.gt.Tablet} {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 590px;
  height: 144px;
  margin-left: auto;
`;

export const ItemText = styled.span`
  color: ${Color.white};
  text-align: right;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
`;

export const CallOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-left: 50%;
`;

export const CallOrderText = styled(ItemText)`
  text-align: left;
  font-size: 20px;
  width: 40%;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const PhoneInputWrapper = styled.div`
  width: 70%;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 253, 253, 0.67);
  border: none;
  outline: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PhoneButton = styled.button`
  width: 50%;
  border: none;
  outline: none;
  padding: 10px;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${Color.white};
  color: ${Color.blue};
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  &:hover{
    background-color: ${Color.gray};
  }
`;

export const SmallCircle = styled.div`
  position: absolute;
  left: -7%;
  margin-top: 100px;
  width: 477px;
  height: 477px;
  border-radius: 477px;
  background: linear-gradient(180deg, #BCBCBC 0%, rgba(188, 188, 188, 0.00) 100%);
  mix-blend-mode: screen;
`;

export const BigCircle = styled.div`
  position: absolute; 
  margin-top: 30px;
  left: -8%;
  width: 552px;
  height: 552px;
  border-radius: 552px;
  background: linear-gradient(180deg, #BCBCBC 0%, rgba(188, 188, 188, 0.00) 100%);
  mix-blend-mode: screen;
`;

export const Plane = styled.img`
  position: absolute;
  margin-top: 2%;
  left: -20%;
  width: 70%;
  height: 510px;
`;