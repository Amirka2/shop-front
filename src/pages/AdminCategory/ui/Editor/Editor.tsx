import React from 'react';
import * as Styles from "./Editor.styles";

interface EditorProps {
    inputState: string;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    ref: any;
}

export const Editor = ({inputState, placeholder, handleChange, handleSave, ref}: EditorProps) => {
    return (
        <Styles.EditorWindow>
            <Styles.Editor
                value={inputState}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <Styles.SaveButton
                ref={ref}
                onClick={handleSave}
            >
                Сохранить
            </Styles.SaveButton>
        </Styles.EditorWindow>
    );
};
