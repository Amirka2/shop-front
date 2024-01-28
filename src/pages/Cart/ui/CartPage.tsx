import React, {useMemo, useState} from 'react';
import {observer} from "mobx-react";

import {useStores} from "@/shared/hooks";
import {ItemsGrid} from "@/shared/components";
import {Paths} from "@/shared/routing";
import {MainLayout} from "@/shared/ui/Layouts";
import {IOrder, ProductCartCounter} from '@/entities';
import {IProductsToOrder} from "@/entities/interfaces";
import {CartProductCard} from "@/widgets/CartProductCard/CartProductCard";

import {processOrder} from "../api";

import * as Styles from './CartPage.styles';

export const CartPage = observer(() => {
  const { cartStore } = useStores();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPrivacyAgreed, setPrivacyAgree] = useState(false);

  const productsInCart = Array.from(cartStore.getProductsCounts.keys());
  const productsCounts = Array.from(cartStore.getProductsCounts.values());
  let totalSum = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    totalSum += productsInCart[i].price * productsCounts[i];
  }

  const canSubmit = useMemo(() => isPrivacyAgreed
      && productsInCart.length > 0
      && (new RegExp(/^\+?[78]9\d{9}$/).test(phoneNumber))
      && (new RegExp(/^[A-Za-zА-Яа-яЁё\s'-]+$/).test(name))
      && false
    , [name, phoneNumber, isPrivacyAgreed, productsInCart]);

  const handleSubmit = function () {
    if (!canSubmit) {
      alert("Введите корректные данные, пожалуйста!");
    }

    let mapOfProducts = cartStore.getProductsCounts;
    let products: IProductsToOrder[] = [];
    mapOfProducts.forEach((n, p) => {
      let productsToOrder = {
        name: p.name,
        price: p.price,
        count: n,
      }
      products.push(productsToOrder);
    })

    let orderInfo: IOrder = {
      products: products,
      name: name,
      phoneNumber: phoneNumber,
      mail: '',
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
      <Styles.CaptionWrapper right={true}>
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
                  <span>{p.price * cartStore.getProductCount(p)} ₽</span>
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
