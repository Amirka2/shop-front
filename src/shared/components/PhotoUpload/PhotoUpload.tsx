import React, {FormEvent, useState} from 'react';
import {RcFile} from "antd/es/upload";

import {postFiles} from "@/shared/libs/files";
import {DragAndDrop} from "@/shared/components/DragAndDrop";
import useFileSelection from "@/shared/hooks/useFileSelection";

export const PhotoUpload = () => {
  const [addFile, removeFile] = useFileSelection();

  const [photos, setPhotos] = useState<Blob[]>([]);
  const [name, setName] = useState<string | null>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (photos) {
      postFiles(photos);
    }
  }

  const beforeUpload = (file: RcFile) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const arrayBuffer = reader.result as ArrayBuffer;
        const blyadskiyBlob = new Blob([arrayBuffer], { type: 'image/jpeg' });
          setPhotos(prev => [
            ...prev,
            blyadskiyBlob
          ]);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type={'text'} value={name || ''} onChange={(e) => setName(e.currentTarget.value)}/>
        <DragAndDrop addFile={addFile} removeFile={removeFile} beforeUpload={beforeUpload}/>
        <input type="submit"/>
      </form>
    </>
  );
};
