import React from 'react';

import * as Styles from "./Editor.styles";

interface EditorProps {
  nameInput: string;
  placeholder: string;
  handleNameInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

export const Editor = ({
                         nameInput,
                         placeholder,
                         handleNameInputChange,
                         handleSave,
                       }: EditorProps) => {
  return (
    <Styles.EditorWindow>

      <Styles.SaveButton
        onClick={handleSave}
      >
        Сохранить
      </Styles.SaveButton>

      <Styles.NameInput
        value={nameInput}
        placeholder={placeholder}
        onChange={handleNameInputChange}
        autoFocus
      />

      {/*<Styles.PhotoInputWrapper>*/}
      {/*  <PhotoUpload setPhotosBlob={setPhotosBlob} />*/}
      {/*</Styles.PhotoInputWrapper>*/}

    </Styles.EditorWindow>
  );
};
