import React, {ChangeEvent, useState} from 'react';

import {useMobileOrDesktop} from "@/shared/hooks";
import {PhoneMask} from "@/shared/components/CallOrdering/PhoneMask";
import {CallOrderPhone} from '@/shared/components/Icons/CallOrderPhone';
import planeImage from '@/shared/photos/plane.png';

import * as Styles from "../CallOrdering/CallOrdering.styles";

export const CallOrdering = () => {
    const isMobile = useMobileOrDesktop();
    const [phone, setPhone] = useState<string>('');
    const [isNumberEntered, setIsNumberEntered] = useState<boolean>(false);

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
        setIsNumberEntered(true);
    };

    const handlePhoneSend = () => {
        if (isNumberEntered) {
            console.log(`Отправка номера телефона: ${phone}`);
            setPhone('');
        }
    }

    return (
        <Styles.MainWrapper $isMobile={isMobile}>
            <Styles.Wrapper $isMobile={isMobile}>
                <Styles.BigCircle />
                <Styles.SmallCircle />
                <Styles.Plane src={planeImage} />
                <Styles.Item>
                    <Styles.ItemText>
                        CONSTR SPB - ваш надежный
                        экспортёр товаров
                        из Европы
                    </Styles.ItemText>
                </Styles.Item>
                <Styles.CallOrder>
                    <Styles.ItemText>
                        С лёту решим любой вопрос
                    </Styles.ItemText>
                    <Styles.CallOrderText>
                        Не нашли нужный товар?
                        Уточнить детали заказа?
                    </Styles.CallOrderText>
                    <Styles.PhoneWrapper>
                        <Styles.PhoneInputWrapper>
                            <CallOrderPhone />
                                <PhoneMask
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                        </Styles.PhoneInputWrapper>
                        <Styles.PhoneButton onClick={handlePhoneSend}>
                            Позвоните мне
                        </Styles.PhoneButton>
                    </Styles.PhoneWrapper>
                </Styles.CallOrder>
            </Styles.Wrapper>
        </Styles.MainWrapper>
    );
};
