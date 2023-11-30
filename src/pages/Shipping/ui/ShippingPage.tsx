import React from 'react';
import * as Styles from "@/pages/Shipping/ui/ShippingPage.styles";
import {Container} from "@/shared/ui/Container";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {Wrapper} from "@/pages/Shipping/ui/ShippingPage.styles";

export const ShippingPage = () => {
    return (
        <Wrapper>
            <Container>
                <Styles.Wrapper>
                    <Styles.Content>
                        <Styles.Text>
                            Уважаемые покупатели, оплаченные заказы Вы можете забрать
                            самостоятельно на нашем складе:
                        </Styles.Text>
                        <Styles.BoldText>
                            г. Челябинск, Курчатовский район, тракт Свердловский, д.8
                        </Styles.BoldText>
                        <Styles.ContentAddress>
                            <YMaps>
                                <Map defaultState={{ center: [55.232659, 61.366477], zoom: 16 }} width="100%">
                                    <Placemark geometry={[55.232659, 61.366477]} />
                                </Map>
                            </YMaps>
                        </Styles.ContentAddress>
                        <Styles.Text>
                            Также Мы можем отправить оплаченные заказы транспортными компаниями в любой город России.
                        </Styles.Text>
                        <Styles.Text>
                            При заказе менеджер согласует с Вами стоимость, сроки и условия доставки.
                        </Styles.Text>
                    </Styles.Content>
                </Styles.Wrapper>
            </Container>
        </Wrapper>
    );
};
