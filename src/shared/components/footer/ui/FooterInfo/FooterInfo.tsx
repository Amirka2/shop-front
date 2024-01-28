import React from 'react';
import * as Styles from './FooterInfo.styles';

export const FooterInfo = () => {
  return (
    <Styles.Wrapper>
      <Styles.Item>
        <img src='/icons/backpack.png' alt={'icon'}/>
        <span>Гарантируем качество продукции</span>
      </Styles.Item>
      <Styles.Item>
        <img src='/icons/watch.png' alt={'icon'}/>
        <span>Быстрая обратная связь</span>
      </Styles.Item>
      <Styles.Item>
        <img src='/icons/cheer.png' alt={'icon'}/>
        <span>Приветливость и отзывчивость</span>
      </Styles.Item>
      <Styles.Item>
        <img src='/icons/call_log.png' alt={'icon'}/>
        <span>Свяжитесь с нами и мы Вам поможем!</span>
      </Styles.Item>
    </Styles.Wrapper>
  );
};
