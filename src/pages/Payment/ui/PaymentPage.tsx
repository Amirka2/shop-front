import React from 'react';
import {Container} from "@/shared/ui/Container";
import * as Styles from "@/pages/Payment/ui/PaymentPage.styles";
import {Wrapper} from "@/pages/Payment/ui/PaymentPage.styles";
import {contacts} from "@/app/shop/mock";
export const PaymentPage = () => {
    return (
        <Wrapper>
            <Container>
                <Styles.Wrapper>
                    <Styles.Content>
                        <Styles.Text>
                            Уважаемые покупатели, наша компания работает с ИП и Юридическими лицами.
                        </Styles.Text>
                        <Styles.Text>
                            По безналичному расчету в соответствии с выставленным счетом.
                        </Styles.Text>
                        <Styles.BoldText>
                            Для получения счета:
                        </Styles.BoldText>
                        <Styles.Text>
                            Напишите нам
                            по <Styles.Link href={contacts.whatsAppLink}>Whatsapp</Styles.Link> или <Styles.Link href={`mailto:${contacts.email}`}>электронной почте</Styles.Link> с
                            вложенными реквизитами Вашей компании.
                        </Styles.Text>
                        <Styles.Text>
                            Если необходимо, то заключаем Договор на поставку.
                        </Styles.Text>
                        <Styles.Text>
                            Цены на сайте указаны без учета доставки по РФ.
                        </Styles.Text>
                    </Styles.Content>
                </Styles.Wrapper>
            </Container>
        </Wrapper>
    );
};
