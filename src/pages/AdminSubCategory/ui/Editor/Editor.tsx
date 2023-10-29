import React from 'react';
import * as Styles from "./Editor.styles";
//import {Check} from "@/shared/ui"

interface EditorProps{
    placeholder: string;
    textarea: string;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Editor = ({placeholder, textarea, handleNameChange, handlePriceChange, handleDescriptionChange}: EditorProps) => {
    return (
        <Styles.EditorWindow>
            <Styles.Wrapper>
                <Styles.Title>
                    Название
                </Styles.Title>
                <Styles.Editor
                    placeholder={placeholder}
                    onChange={handleNameChange}
                />
            </Styles.Wrapper>
            <Styles.Wrapper>
                <Styles.Title>
                    Цена
                </Styles.Title>
                <Styles.Editor
                    placeholder={placeholder}
                    onChange={handlePriceChange}
                />
            </Styles.Wrapper>
            <Styles.Wrapper>
                <Styles.Title>
                    Описание
                </Styles.Title>
                <Styles.Editor
                    onChange={handleDescriptionChange}
                />
            </Styles.Wrapper>
            <Styles.Wrapper>
                <Styles.Title>
                    Фото
                </Styles.Title>
            </Styles.Wrapper>
            <Styles.CheckButton>
                {/*<Check />*/}
            </Styles.CheckButton>
        </Styles.EditorWindow>

    );
};
