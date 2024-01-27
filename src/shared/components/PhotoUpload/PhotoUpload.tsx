import React, {Dispatch} from 'react';
import {RcFile} from "antd/es/upload";

import {DragAndDrop} from "@/shared/components/DragAndDrop";
import useFileSelection from "@/shared/hooks/useFileSelection";

interface PhotoUploadProps {
  setPhotosBlob: Dispatch<React.SetStateAction<Blob[]>>;
}

export const PhotoUpload = ({setPhotosBlob}: PhotoUploadProps) => {
  const [addFile, removeFile] = useFileSelection();

  const beforeUpload = (file: RcFile) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const arrayBuffer = reader.result as ArrayBuffer;
        const blob = new Blob([arrayBuffer], {type: 'image/jpeg'});
        setPhotosBlob((prev: Blob[]) => [
          ...prev,
          blob
        ]);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  return (
    <>
      <DragAndDrop
        addFile={addFile}
        removeFile={removeFile}
        beforeUpload={beforeUpload}
      />
    </>
  );
};
