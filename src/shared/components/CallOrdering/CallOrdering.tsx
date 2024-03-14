import React, {ChangeEvent, useMemo, useState} from 'react';

import {PhoneMask} from "@/shared/components/CallOrdering/PhoneMask";
import {CallOrderPhone} from '@/shared/components/Icons/CallOrderPhone';
import planeImage from '@/shared/photos/plane.png';

import * as Styles from "../CallOrdering/CallOrdering.styles";
import {requireCall} from "@/shared/components/CallOrdering/api";

export const CallOrdering = () => {
  const [phone, setPhone] = useState<string>('');
  const [isAgreed, setIsAgreed] = useState(false);

  const canSubmit: boolean = useMemo(() => {
    return isAgreed && !phone.includes('_');
  }, [isAgreed, phone]);

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlePhoneSend = () => {
    requireCall({
      phoneNumber: phone,
    });

    setPhone('');
    setIsAgreed(false);
  }

  return (
    <Styles.MainWrapper>
      <Styles.Wrapper>
        <Styles.BigCircle/>
        <Styles.SmallCircle/>
        <Styles.Plane src={planeImage}/>
        <Styles.TagLine>
          <Styles.ItemText>
            Конструкция СПБ - ваш надежный поставщик товаров из Европы
          </Styles.ItemText>
        </Styles.TagLine>
        <Styles.CallOrder>
          <Styles.ItemText>
            С лёту решим любой вопрос
          </Styles.ItemText>
          <Styles.CallOrderText>
            Не нашли нужный товар?
          </Styles.CallOrderText>
          <Styles.CallOrderText>
            Уточнить детали заказа?
          </Styles.CallOrderText>
          <Styles.PhoneWrapper>
            <Styles.PhoneInputWrapper>
              <CallOrderPhone/>
              <PhoneMask
                value={phone}
                onChange={handlePhoneChange}
              />
            </Styles.PhoneInputWrapper>
            <Styles.PhoneButton
              disabled={!canSubmit}
              onClick={handlePhoneSend}
            >
              Позвоните мне
            </Styles.PhoneButton>
          </Styles.PhoneWrapper>
          <Styles.PhoneWrapper>
            <Styles.Label>
              Я согласен с <Styles.StyledLink to="/privacy-policy">обработкой личной информации</Styles.StyledLink>
            </Styles.Label>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={() => setIsAgreed(prev => !prev)}
            />
          </Styles.PhoneWrapper>
        </Styles.CallOrder>
      </Styles.Wrapper>
    </Styles.MainWrapper>
  );
};
