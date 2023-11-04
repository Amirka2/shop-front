import React from 'react';
import * as Styles from "./Editor.styles";
import {Check} from "@/shared/ui"

interface EditorProps{
    placeholder: string;
    textarea: string;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    ref: any;
}
export const Editor = ({placeholder, textarea, handleNameChange, handlePriceChange, handleDescriptionChange, handleSave, ref}: EditorProps) => {
    return (
        <Styles.EditorWindow>
            <Styles.Input>
                <Styles.Title>
                    Название
                </Styles.Title>
                <Styles.Row
                    placeholder={placeholder}
                    onChange={handleNameChange}
                />
            </Styles.Input>
            <Styles.Input>
                <Styles.Title>
                    Цена
                </Styles.Title>
                <Styles.Row
                    placeholder={placeholder}
                    onChange={handlePriceChange}
                />
            </Styles.Input>
            <Styles.Input>
                <Styles.Title>
                    Описание
                </Styles.Title>
                <Styles.Row
                    placeholder={textarea}
                    onChange={handleDescriptionChange}
                />
            </Styles.Input>
            <Styles.Input>
                <Styles.Title>
                    Фото
                </Styles.Title>
            </Styles.Input>
                <Styles.CheckButton ref={ref}>
                    <Check onClick={handleSave}/>
                </Styles.CheckButton>
        </Styles.EditorWindow>

    );
};
