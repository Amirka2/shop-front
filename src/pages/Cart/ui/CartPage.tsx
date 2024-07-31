import React, { useMemo, useState } from "react";
import { observer } from "mobx-react";

import { useStores } from "@/shared/hooks";
import { CeoData, ItemsGrid } from "@/shared/components";
import { Paths } from "@/shared/routing";
import { MainLayout } from "@/shared/ui/Layouts";
import { CeoPagesData } from "@/shared/constants";
import { IOrder, ProductCartCounter } from "@/entities";
import { handleYMClick } from "@/entities/Metrics";
import { CartProductCard } from "@/widgets/CartProductCard/CartProductCard";

import { processOrder } from "../api";

import * as Styles from "./CartPage.styles";

export const CartPage = observer(() => {
  const { cartStore } = useStores();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPrivacyAgreed, setPrivacyAgree] = useState(false);

  const productsInCart = cartStore.productsFromCart;

  let totalSum = productsInCart.reduce((acc, prev) => {
    if (!prev.inStock) {
      return acc;
    }

    return acc + prev.price * prev.count;
  }, 0);

  const isEveryProductInStock = useMemo(() => {
    return productsInCart.filter((p) => !p.inStock).length === 0;
  }, [productsInCart]);
  const isPhoneCorrect = useMemo(
    () => new RegExp(/^\+?[78]9\d{9}$/).test(phoneNumber),
    [phoneNumber]
  );
  const isNameCorrect = useMemo(
    () => new RegExp(/^[A-Za-zА-Яа-яЁё\s'-]+$/).test(name),
    [name]
  );
  const isEnoughProducts = useMemo(
    () => productsInCart.length > 0,
    [productsInCart]
  );

  const canSubmit = useMemo(
    () =>
      isPrivacyAgreed &&
      isEnoughProducts &&
      isPhoneCorrect &&
      isNameCorrect &&
      isEveryProductInStock,
    [name, phoneNumber, isPrivacyAgreed, productsInCart]
  );

  const handleSubmit = function () {
    let orderInfo: IOrder = {
      products: productsInCart,
      name: name,
      phoneNumber: phoneNumber,
    };

    if (!isPrivacyAgreed) {
      alert('Необходимо согласиться с политикой конфиденциальности');
      return;
    } 

    processOrder(orderInfo)
      .then(function (response) {
        if (response && +response?.status === 200) {
          alert("Вы успешно совершили заказ!");
          cartStore.deleteAllProducts();
          setName("");
          setPhoneNumber("");
          handleYMClick('order');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const productsElements = productsInCart.map((p) => {
    return (
      <>
        <Styles.ProductWrapper>
          <CartProductCard product={p} key={p.id} />
          <ProductCartCounter product={p} />
        </Styles.ProductWrapper>
        <Styles.Line />
      </>
    );
  });

  return (
    <MainLayout>
      <CeoData {...CeoPagesData.cart} />
      <Styles.CaptionWrapper isRight>
        <Styles.Link to={"/"}>Вернуться к покупкам</Styles.Link>
      </Styles.CaptionWrapper>
      <Styles.CaptionWrapper>
        <h1>Корзина</h1>
      </Styles.CaptionWrapper>
      <Styles.Flex>
        <ItemsGrid>{productsElements}</ItemsGrid>
        {isEnoughProducts && (
          <Styles.CartInfoMenu>
          <Styles.CartCaption>Ваш заказ</Styles.CartCaption>
          <Styles.OrderFieldsList>
            {productsInCart.map((p) => {
              return (
                <Styles.OrderFieldsListItem>
                  {p.name}
                  <span>
                    {p.inStock
                      ? `${p.price * cartStore.getProductCount(p)} ₽`
                      : "По запросу"}{" "}
                  </span>
                </Styles.OrderFieldsListItem>
              );
            })}
          </Styles.OrderFieldsList>
          <Styles.Summary>
            {"Итого:"}
            <span>{totalSum} ₽</span>
          </Styles.Summary>
          <Styles.Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder={"Имя"}
            value={name}
          />
          {!isNameCorrect && (
            <Styles.ErrorText>Пожалуйста, введите имя</Styles.ErrorText>
          )}
          <Styles.Input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={"Номер телефона"}
            value={phoneNumber}
          />
          {!isPhoneCorrect && (
            <Styles.ErrorText>Пожалуйста, введите корректный номер телефона</Styles.ErrorText>
          )}
          <Styles.PrivacyRow>
            <label htmlFor="privacyCheckbox">
              <Styles.LabelText>
                Согласен с&nbsp;
                <Styles.LabelLink to={Paths.privacyPolicy}>
                  политикой конфиденциальности
                </Styles.LabelLink>
              </Styles.LabelText>
            </label>
            <input
              name="privacyCheckbox"
              type="checkbox"
              onChange={() => setPrivacyAgree((prev) => !prev)}
              checked={isPrivacyAgreed}
            />
          </Styles.PrivacyRow>
          <Styles.SubmitButton onClick={handleSubmit}>
            Оформить
          </Styles.SubmitButton>
        </Styles.CartInfoMenu>
        )}
      </Styles.Flex>
    </MainLayout>
  );
});
