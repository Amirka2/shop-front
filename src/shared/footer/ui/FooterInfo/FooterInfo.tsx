import React from 'react';
import {Item, Wrapper} from './FooterInfo.styles';

export const FooterInfo = () => {
    return (
        <Wrapper>
            <Item>
                <img src='/icons/backpack.png' alt={'icon'}/>
                <span>Гарантируем качество продукции</span>
            </Item>
            <Item>
                <img src='/icons/watch.png' alt={'icon'}/>
                <span>Быстрая обратная свзяь</span>
            </Item>
            <Item>
                <img src='/icons/cheer.png' alt={'icon'}/>
                <span>Приветливость и отзывчивость</span>
            </Item>
            <Item>
                <img src='/icons/call_log.png' alt={'icon'}/>
                <span>Свяжитесь с нами и мы Вам поможем!</span>
            </Item>
        </Wrapper>
    );
};
