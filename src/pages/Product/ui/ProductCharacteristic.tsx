import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 2.88px;
`;

const Title = styled.div`
  color: #225479;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductCharacteristic = () => {
  return (
    <Container>
      <Title>О товаре:</Title>
      <div>
        <span>Вид</span> <span>Название</span>
      </div>
      <div>
        <span>Цена</span> <span>115000 ₽</span>
      </div>
      <div>
        <span>Производитель</span> <span>Название производителя</span>
      </div>
      <div>
        <span>Страна производства</span> <span>Германия</span>
      </div>
      <div>
        <span>Экспортер</span> <span>Мидкаду</span>
      </div>
    </Container>
  );
};
