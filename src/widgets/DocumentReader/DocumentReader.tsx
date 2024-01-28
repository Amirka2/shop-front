import React, {FC, useEffect} from "react";
import {convertFromRaw, DraftEditorCommand, EditorState, RichUtils} from "draft-js";

import {linkDecorator} from "@/shared/components";
import {mediaBlockRenderer} from "@/shared/components";

import './styles.css';
import * as Styles from './DocumentReader.styles';

interface DocumentReaderProps {
  description: string;
}

export const DocumentReader: FC<DocumentReaderProps> = ({description}) => {
  const initialState = description
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(description)), linkDecorator)
    : EditorState.createEmpty(linkDecorator);
  const [editorState, setEditorState] = React.useState<EditorState>(initialState);

  useEffect(() => {
    const initialState = (description && description !== '')
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(description)), linkDecorator)
      : EditorState.createEmpty(linkDecorator);
    setEditorState(initialState);
  }, [description]);

  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <Styles.Wrapper>
      <Styles.WordEditor
        readOnly={true}
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        blockRendererFn={mediaBlockRenderer}
      />
    </Styles.Wrapper>
  );
};
