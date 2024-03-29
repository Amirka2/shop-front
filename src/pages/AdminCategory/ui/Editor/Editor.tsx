import React, {Dispatch} from 'react';

import {PhotoUpload} from "@/shared/components";

import * as Styles from "./Editor.styles";

interface EditorProps {
    nameInput: string;
    placeholder: string;
    handleNameInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    setPhotosBlob: Dispatch<React.SetStateAction<Blob[]>>;
    isSubmitDisabled?: boolean;
    ref: any;
}

export const Editor = ({nameInput, placeholder, isSubmitDisabled = false, handleNameInputChange, handleSave, handleKeyPress, setPhotosBlob, ref}: EditorProps) => {
  return (
        <Styles.EditorWindow>

          <Styles.SaveButton
            ref={ref}
            onClick={handleSave}
            disabled={isSubmitDisabled}
          >
            Сохранить
          </Styles.SaveButton>

          <Styles.NameInput
              value={nameInput}
              placeholder={placeholder}
              onChange={handleNameInputChange}
              onKeyDown={handleKeyPress}
              autoFocus
          />

          <Styles.PhotoInputWrapper>
            <PhotoUpload setPhotosBlob={setPhotosBlob} />
          </Styles.PhotoInputWrapper>

        </Styles.EditorWindow>
    );
};
