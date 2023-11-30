import React from 'react';
import * as Styles from "./Editor.styles";
import { Check } from "@/shared/ui"

interface EditorProps{
    textarea: string;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    ref: any;

}
export const Editor = ({
    textarea,
    handleNameChange,
    handlePriceChange,
    handleDescriptionChange,
    handleSave,
    ref
    }: EditorProps) => {
    return (
        <Styles.EditorWindow>
            <Styles.Input>
                <Styles.Title>
                    Название
                </Styles.Title>
                <Styles.Row
                    placeholder="Введите название"
                    onChange={handleNameChange}
                />
            </Styles.Input>
            <Styles.Input>
                <Styles.Title>
                    Цена
                </Styles.Title>
                <Styles.Row
                    placeholder="Введите цену"
                    onChange={handlePriceChange}
                />
            </Styles.Input>
            <Styles.Input>
                <Styles.Title>
                    Описание
                </Styles.Title>
                <Styles.Row
                    placeholder="Введите описание"
                    onChange={handleDescriptionChange}
                />
            </Styles.Input>
            <Styles.Input>
                <Styles.Elements>
                    <Styles.Title>
                        Фото
                    </Styles.Title>
                    <Styles.CheckButton ref={ref}>
                        <Check onClick={handleSave}/>
                    </Styles.CheckButton>
                </Styles.Elements>
            </Styles.Input>
        </Styles.EditorWindow>

    );
};
