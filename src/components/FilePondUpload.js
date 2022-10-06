// This is it. 
// npm install filepond react-filepond
// npm install filepond-plugin-image-exif-orientation filepond-plugin-image-preview
// npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation
import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondUpload() {
  const [files, setFiles] = useState([]);
  
    return (
      <div className="container mt-4">
        <h2 className="mb-3">React FilePond File Upload Example</h2>
        <FilePond
          allowMultiple={true}
          files={files}
          maxFiles={5}
          allowReorder={true}
          server="" // File upload api goes here
        />
      </div>
    )
}
export default FilePondUpload