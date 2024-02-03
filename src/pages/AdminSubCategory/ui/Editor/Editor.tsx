import React from 'react';

import {Button } from "@/shared/ui"
import {IManufacturer} from "@/entities";

import * as Styles from "./Editor.styles";

interface EditorProps{
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSave: () => void;
    ref: any;
    manufacturers: IManufacturer[];
    handleManufacturerSelect: (id: number) => void;
}
export const Editor = ({
    handleNameChange,
    handlePriceChange,
    handleDescriptionChange,
    handleSave,
    ref,
    manufacturers,
  handleManufacturerSelect,
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
                <Styles.Title>
                    Производитель
                </Styles.Title>
                <Styles.Select
                  onChange={(e) =>
                    handleManufacturerSelect(Number(e.target.value))}
                >
                    {manufacturers.map((m, i) => (
                      <option
                        value={m.id}
                        selected={i === 0}
                        key={m.id}
                      >
                        {m.name}
                      </option>
                    ))}
                </Styles.Select>
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
