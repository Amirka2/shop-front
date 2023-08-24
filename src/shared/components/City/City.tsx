import React from 'react';
import {Wrapper, Select} from "./City.styles";

export const City = () => {
    return (
        <Wrapper>
            <Select>
                <option>Челябинск</option>
                <option disabled>Лондон</option>
            </Select>
        </Wrapper>
    );
};
