import React from 'react';
import * as Styles from "./Editor.styles";
import {Button, Check } from "@/shared/ui"

interface EditorProps{
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSave: () => void;
    ref: any;

}
export const Editor = ({
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
                <Styles.Textarea
                    placeholder="Введите описание"
                    onChange={handleDescriptionChange}
                />
            </Styles.Input>
            <Styles.Input>
                <Styles.Elements>
                    <Button
                      size={'M'}
                      fullWidth
                      onClick={handleSave}
                      ref={ref}
                    >
                        Добавить
                    </Button>
                </Styles.Elements>
            </Styles.Input>
        </Styles.EditorWindow>
    );
};
