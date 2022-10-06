// This is it. 
// npm install filepond react-filepond
// npm install filepond-plugin-image-exif-orientation filepond-plugin-image-preview
// npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation
import React, { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
registerPlugin(FilePondPluginFileValidateSize, FilePondPluginImagePreview)
export default function FileSizeValidate() {
  const [files, initFiles] = useState([])
  return (
    <div className = "container mt-5">
      <h2 className = "mb-4">React File Upload Size Validation Example</h2>
      <FilePond
        files = {files}
        allowFileSizeValidation = {true}
        maxFileSize = {500000}
        labelMaxFileSizeExceeded = {'File is too large'}
      />
    </div>
  )
}