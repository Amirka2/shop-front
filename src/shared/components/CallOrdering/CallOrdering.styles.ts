import styled from 'styled-components'

import {mediaQueries} from '@/shared/constants/mediaQueries';

import {Color} from "@/shared/constants";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;
    align-items: center;

    ${mediaQueries.gt.Desktop} {
        align-items: flex-end;
        padding: 24px 50px 0 50px;
        height: 400px;
    }
`;

export const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    background: linear-gradient(180deg, #225479 0%, #12446A 100%);
    overflow: hidden;

    ${mediaQueries.gt.Tablet} {
        width: 100%;
    }
`;

export const TagLine = styled.div`
    display: none;
    width: 590px;
    height: 144px;
    margin-left: auto;

    ${mediaQueries.gt.Tablet} {
        display: flex;
    }
`;

export const ItemText = styled.span`
    color: ${Color.white};
    text-align: right;
    font-size: 32px;
    font-weight: 400;
    line-height: normal;
    font-style: italic;

    margin-bottom: 10px;
`;

export const CallOrder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    ${mediaQueries.gt.Desktop} {
        width: 40%;
    }
`;

export const CallOrderText = styled(ItemText)`
    text-align: left;
    font-size: 20px;
`;

export const PhoneWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const PhoneInputWrapper = styled.div`
    min-width: 185px;
    height: 40px;
    border-radius: 8px;
    background: rgba(255, 253, 253, 0.67);
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 4px;

    & svg {
        display: none;
    }

    ${mediaQueries.gt.Tablet} {
        padding: 10px;

        & svg {
            display: block;
        }
    }
`;

export const Label = styled.span`
    font-size: 14px;
    color: ${Color.white};
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
    font-size: 14px;
    font-weight: 400;
    line-height: normal;

    &:disabled {
        color: ${Color.darkGray};
        cursor: inherit;
    }

    ${mediaQueries.gt.Tablet} {
        font-size: 18px;
    }
`;

const Circle = styled.div`
    display: none;
    position: absolute;
    left: -7%;
    background: linear-gradient(180deg, #BCBCBC 0%, rgba(188, 188, 188, 0.00) 100%);
    mix-blend-mode: screen;

    ${mediaQueries.gt.Desktop} {
        display: inline-block;
    }
`;

export const SmallCircle = styled(Circle)`
    margin-top: 100px;
    width: 477px;
    height: 477px;
    border-radius: 477px;
`;

export const BigCircle = styled(Circle)`
    margin-top: 30px;
    width: 552px;
    height: 552px;
    border-radius: 552px;
`;

export const Plane = styled.img`
    display: none;
    position: absolute;
    margin-bottom: 2%;
    left: -220px;
    height: 510px;

    ${mediaQueries.gt.Desktop} {
        display: inline-block;
    }
`;
