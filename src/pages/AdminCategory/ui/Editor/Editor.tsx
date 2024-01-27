import React from 'react';

import * as Styles from "./Editor.styles";

interface EditorProps {
    inputState: string;
    placeholder: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    ref: any;
}

export const Editor = ({inputState, placeholder, handleChange, handleSave, handleKeyPress, ref}: EditorProps) => {
    return (
        <Styles.EditorWindow>
            <Styles.Editor
                value={inputState}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                autoFocus
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
