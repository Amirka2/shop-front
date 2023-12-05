import React, {SetStateAction, useEffect} from "react";
import {AtomicBlockUtils, convertFromRaw, convertToRaw, DraftEditorCommand, EditorState, RichUtils} from "draft-js";
import "draft-js/dist/Draft.css";
import {linkDecorator} from "./Link";
import {mediaBlockRenderer} from "./Media";

import * as Styles from './DocumentEditor.styles';
import {useStores} from "@/shared/hooks";
import {PRODUCT_DESCRIPTION_KEYS} from "@/entities/interfaces";

interface DocumentEditorProps {
    description: string | undefined;
    setEditorOpen: React.Dispatch<SetStateAction<boolean>>;
    descriptionId: number;
    setDescriptionId: React.Dispatch<SetStateAction<number>>
}

export const DocumentEditor: React.FC<DocumentEditorProps> = ({
    description,
    descriptionId,
    setDescriptionId,
    setEditorOpen }) => {
    const { adminProductStore } = useStores();
    const initialState = description
        ? EditorState.createWithContent(convertFromRaw(JSON.parse(description)), linkDecorator)
        : EditorState.createEmpty(linkDecorator);
    const [editorState, setEditorState] = React.useState<EditorState>(initialState);
    console.log(initialState.getCurrentContent())

    useEffect(() => {
        const initialState = description
          ? EditorState.createWithContent(convertFromRaw(JSON.parse(description)), linkDecorator)
          : EditorState.createEmpty(linkDecorator);
        setEditorState(initialState);
    }, [descriptionId, description]);

    const handleSave = () => {
        const data = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        // console.log(convertToRaw(editorState.getCurrentContent()));
        // localStorage.setItem(TEXT_EDITOR_ITEM, data);
        adminProductStore.addDescriptionField(descriptionId, PRODUCT_DESCRIPTION_KEYS.BODY, data)
        setEditorOpen(false);
    };

    const handleInsertImage = () => {
        const src = prompt("Please enter the URL of your picture");
        if (!src) {
            return;
        }
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity("image", "IMMUTABLE", { src });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithEntity
        });
        return setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " "));
    };

    const handleAddLink = () => {
        const selection = editorState.getSelection();
        const link = prompt("Please enter the URL of your link");
        if (!link) {
            setEditorState(RichUtils.toggleLink(editorState, selection, null));
            return;
        }
        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
            url: link
        });
        const newEditorState = EditorState.push(editorState, contentWithEntity, "apply-entity");
        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
    };

    const handleKeyCommand = (command: DraftEditorCommand) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

    const handleTogggleClick = (e: React.MouseEvent, inlineStyle: string) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
        e.preventDefault();
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    return (
        <Styles.Wrapper className="texteditor">
            <Styles.ButtonsContainer>
                <Styles.ButtonsSection>
                    <Styles.Button onMouseDown={(e) => handleBlockClick(e, "header-one")}>H1</Styles.Button>
                    <Styles.Button onMouseDown={(e) => handleBlockClick(e, "header-two")}>H2</Styles.Button>
                    <Styles.Button onMouseDown={(e) => handleBlockClick(e, "header-three")}>H3</Styles.Button>
                </Styles.ButtonsSection>
                <Styles.ButtonsSection>
                    <Styles.Button onMouseDown={(e) => handleBlockClick(e, "unstyled")}>Обычный</Styles.Button>
                    <Styles.Button onMouseDown={(e) => handleTogggleClick(e, "BOLD")}><b>Жирный</b></Styles.Button>
                    <Styles.Button onMouseDown={(e) => handleTogggleClick(e, "UNDERLINE")}><u>Подчеркнутый</u></Styles.Button>
                    <Styles.Button onMouseDown={(e) => handleTogggleClick(e, "ITALIC")}><i>Курсив</i></Styles.Button>
                    <Styles.Button onMouseDown={(e) => handleTogggleClick(e, "STRIKETHROUGH")}><s>Перечеркнутый</s></Styles.Button>
                </Styles.ButtonsSection>
                <Styles.ButtonsSection>
                    <Styles.Button onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}>1. Нумерованный список</Styles.Button>
                    <Styles.Button onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>&bull; Ненумерованный список</Styles.Button>
                </Styles.ButtonsSection>
                <Styles.ButtonsSection>
                    <Styles.Button
                        onMouseDown={(e) => {
                            e.preventDefault();
                            handleInsertImage();
                        }}>
                        Изображение
                    </Styles.Button>
                    <Styles.Button
                        disabled={editorState.getSelection().isCollapsed()}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            handleAddLink();
                        }}>
                        Ссылка
                    </Styles.Button>
                </Styles.ButtonsSection>
                <Styles.ButtonsSection>
                    <Styles.Button
                        disabled={editorState.getUndoStack().size <= 0}
                        onMouseDown={() => setEditorState(EditorState.undo(editorState))}>
                        &#8629; Шаг назад
                    </Styles.Button>
                    <Styles.Button
                        disabled={editorState.getRedoStack().size <= 0}
                        onMouseDown={() => setEditorState(EditorState.redo(editorState))}>
                        &#8627; Шаг вперед
                    </Styles.Button>
                </Styles.ButtonsSection>
            </Styles.ButtonsContainer>
            <Styles.WordEditor
                editorState={editorState}
                onChange={setEditorState}
                handleKeyCommand={handleKeyCommand}
                blockRendererFn={mediaBlockRenderer}
            />
            <Styles.Button
                className="save"
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    handleSave();
                }}>
                Сохранить
            </Styles.Button>
        </Styles.Wrapper>
    );
};
