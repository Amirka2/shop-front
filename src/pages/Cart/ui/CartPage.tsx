import React, {useMemo, useState} from 'react';
import {observer} from "mobx-react";

import {useStores} from "@/shared/hooks";
import {ItemsGrid} from "@/shared/components";
import {Paths} from "@/shared/routing";
import {MainLayout} from "@/shared/ui/Layouts";
import {IOrder, ProductCartCounter} from '@/entities';
import {CartProductCard} from "@/widgets/CartProductCard/CartProductCard";

import {processOrder} from "../api";

import * as Styles from './CartPage.styles';

export const CartPage = observer(() => {
  const {cartStore} = useStores();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPrivacyAgreed, setPrivacyAgree] = useState(false);

  const productsInCart = cartStore.getProductsFromCart;

  let totalSum = productsInCart.reduce((acc, prev) => {
    if (!prev.inStock) {
      return acc;
    }

    return acc + prev.price * prev.count
  }, 0)

  const isEveryProductInStock = useMemo(() => {
    return productsInCart.filter(p => !p.inStock).length === 0;
  }, [productsInCart]);

  const canSubmit = useMemo(() => isPrivacyAgreed
      && productsInCart.length > 0
      && (new RegExp(/^\+?[78]9\d{9}$/).test(phoneNumber))
      && (new RegExp(/^[A-Za-zА-Яа-яЁё\s'-]+$/).test(name))
      && isEveryProductInStock
    , [name, phoneNumber, isPrivacyAgreed, productsInCart]);

  const handleSubmit = function () {
    if (!canSubmit) {
      alert("Введите корректные данные, пожалуйста!");
    }

    let orderInfo: IOrder = {
      products: productsInCart,
      name: name,
      phoneNumber: phoneNumber,
    }

    processOrder(orderInfo)
      .then(function (response) {
        if (response && response?.status === '200') {
          alert('Ура, вы успешно совершили заказ!');
          cartStore.deleteAllProducts();
          setName('');
          setPhoneNumber('');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const productsElements = productsInCart.map(p => {
    return (
      <>
        <Styles.ProductWrapper>
          <CartProductCard product={p} key={p.id}/>
          <ProductCartCounter product={p}/>
        </Styles.ProductWrapper>
        <Styles.Line/>
      </>
    )
  })

  return (
    <MainLayout>
      <Styles.CaptionWrapper isRight>
        <Styles.Link to={'/'}>Вернуться к покупкам</Styles.Link>
      </Styles.CaptionWrapper>
      <Styles.CaptionWrapper>
        <h1>Корзина</h1>
      </Styles.CaptionWrapper>
      <Styles.Flex>
        <ItemsGrid>
          {productsElements}
        </ItemsGrid>
        <Styles.CartInfoMenu>
          <Styles.CartCaption>Ваш заказ</Styles.CartCaption>
          <Styles.OrderFieldsList>
            {productsInCart.map(p => {
              return (
                <Styles.OrderFieldsListItem>
                  {p.name}
                  <span>{p.inStock ? `${p.price * cartStore.getProductCount(p)} ₽` : 'По запросу'} </span>
                </Styles.OrderFieldsListItem>
              );
            })}
          </Styles.OrderFieldsList>
          <Styles.Summary>
            {'Итого:'}
            <span>{totalSum} ₽</span>
          </Styles.Summary>
          <Styles.Input
            type='text'
            onChange={(e) => setName(e.target.value)}
            placeholder={'Имя'}
            value={name}
          />
          <Styles.Input
            type='text'
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={'Номер телефона'}
            value={phoneNumber}
          />
          <Styles.PrivacyRow>
            <label htmlFor='privacyCheckbox'>
              <Styles.LabelText>
                Согласен с&nbsp;
                <Styles.LabelLink to={Paths.privacyPolicy}>
                  политикой конфиденциальности
                </Styles.LabelLink>
              </Styles.LabelText>
            </label>
            <input
              name='privacyCheckbox'
              type='checkbox'
              onChange={() => setPrivacyAgree(prev => !prev)}
              checked={isPrivacyAgreed}
            />
          </Styles.PrivacyRow>
          <Styles.SubmitButton
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            Оформить
          </Styles.SubmitButton>
        </Styles.CartInfoMenu>
      </Styles.Flex>
    </MainLayout>
  );
});
