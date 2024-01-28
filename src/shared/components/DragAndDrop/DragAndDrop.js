import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useFilePreview from '../../hooks/useFilePreview';

const { Dragger } = Upload;

export const DragAndDrop = ({ addFile, removeFile, beforeUpload }) => {
    const [handlePreview, previewContent] = useFilePreview();

    const beforeUploadHandler = (file) => {
        addFile(file);
        beforeUpload(file);
        return false;
    };

    return (
        <>
            <Dragger
                multiple={true}
                onRemove={removeFile}
                showUploadList={true}
                listType="picture-card"
                beforeUpload={beforeUploadHandler}
                onPreview={handlePreview}
                accept="image/*"
            >
                <p className="ant-upload-drag-icon">
                    <PlusOutlined />
                </p>
            </Dragger>
            {previewContent}
        </>
    );
};
