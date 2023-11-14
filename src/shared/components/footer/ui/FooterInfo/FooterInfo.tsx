import React from 'react';
import {Item, Wrapper} from './FooterInfo.styles';
import {useMobileOrDesktop} from "@/shared/hooks";

export const FooterInfo = () => {
    const isMobile = useMobileOrDesktop();

    return (
        <Wrapper $isMobile={isMobile}>
            <Item $isMobile={isMobile}>
                <img src='/icons/backpack.png' alt={'icon'}/>
                <span>Гарантируем качество продукции</span>
            </Item>
            <Item $isMobile={isMobile}>
                <img src='/icons/watch.png' alt={'icon'}/>
                <span>Быстрая обратная связь</span>
            </Item>
            <Item $isMobile={isMobile}>
                <img src='/icons/cheer.png' alt={'icon'}/>
                <span>Приветливость и отзывчивость</span>
            </Item>
            <Item $isMobile={isMobile}>
                <img src='/icons/call_log.png' alt={'icon'}/>
                <span>Свяжитесь с нами и мы Вам поможем!</span>
            </Item>
        </Wrapper>
    );
};
