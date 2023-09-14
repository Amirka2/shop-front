import React, {useState} from 'react';

import {Wrapper, LogoContactsWrapper, Title, SearchWrapper, Textarea, CartButtonWrapper, SearchModal} from "./TopBar.styles";

import {Logo} from '@/shared/components';
import {CartButton} from './CartButton';
import {useMobileOrDesktop} from "@/shared/hooks";
import {Color} from "@/shared/constants";
import {HeaderContacts} from "@/entities/Contacts";
import {BurgerMenu} from "@/shared/components";

export const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMobileOrDesktop();
    const handleSearch = function () {

    }

    return (
        <Wrapper $isMobile={isMobile}>
            <LogoContactsWrapper>
                {isMobile ? null : (<Logo/>)}
                {isMobile ? null : (<HeaderContacts/>)}
            </LogoContactsWrapper>
            {
                isMobile ? (
                        <>
                            <BurgerMenu/>
                            <Title>ООО "Конструкция СПБ"</Title>
                        </>
                    ) : (
                    <SearchWrapper>
                        <Textarea onClick={() => setIsOpen(true)}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill={Color.blue}>
                            <g id="search">
                                <path id="Vector"
                                      d="M10.8088 21.1625C8.76105 21.1625 6.75926 20.5552 5.0566 19.4175C3.35393 18.2799 2.02687 16.6628 1.24321 14.7709C0.459564 12.879 0.254525 10.7972 0.654027 8.78879C1.05353 6.78036 2.03963 4.9355 3.48763 3.4875C4.93562 2.03951 6.78049 1.05341 8.78892 0.653905C10.7973 0.254403 12.8791 0.459442 14.771 1.24309C16.6629 2.02674 18.28 3.35381 19.4177 5.05648C20.5553 6.75914 21.1626 8.76093 21.1626 10.8087C21.1626 12.1684 20.8948 13.5147 20.3744 14.7709C19.8541 16.0271 19.0915 17.1685 18.13 18.1299C17.1686 19.0914 16.0272 19.854 14.771 20.3743C13.5149 20.8947 12.1685 21.1625 10.8088 21.1625ZM10.8088 2.53121C9.17714 2.53121 7.58208 3.01506 6.22538 3.92159C4.86867 4.82811 3.81125 6.11658 3.18683 7.62407C2.5624 9.13156 2.39903 10.7904 2.71735 12.3907C3.03568 13.991 3.82142 15.4611 4.9752 16.6148C6.12899 17.7686 7.59899 18.5544 9.19934 18.8727C10.7997 19.191 12.4585 19.0276 13.966 18.4032C15.4735 17.7788 16.7619 16.7214 17.6685 15.3647C18.575 14.008 19.0588 12.4129 19.0588 10.7812C19.0588 8.59317 18.1896 6.49476 16.6425 4.94758C15.0953 3.4004 12.9969 2.53121 10.8088 2.53121Z"
                                      fill={Color.blue}/>
                                <path id="Vector_2"
                                      d="M23.5002 24.5312C23.3647 24.5318 23.2304 24.5054 23.1053 24.4535C22.9802 24.4015 22.8667 24.3251 22.7714 24.2287L17.0927 18.5499C16.9105 18.3545 16.8114 18.0959 16.8161 17.8287C16.8208 17.5616 16.929 17.3067 17.118 17.1177C17.3069 16.9288 17.5618 16.8205 17.829 16.8158C18.0961 16.8111 18.3547 16.9103 18.5502 17.0924L24.2289 22.7712C24.4221 22.9646 24.5305 23.2267 24.5305 23.4999C24.5305 23.7732 24.4221 24.0353 24.2289 24.2287C24.1337 24.3251 24.0202 24.4015 23.8951 24.4535C23.7699 24.5054 23.6357 24.5318 23.5002 24.5312Z"
                                      fill={Color.blue}/>
                            </g>
                        </svg>
                    </SearchWrapper>
                )
            }
            {/*<CartButtonWrapper>*/}
            {/*    <CartButton/>*/}
            {/*</CartButtonWrapper>*/}
            {isOpen ? (<SearchModal/>) : null}
        </Wrapper>
    );
};
