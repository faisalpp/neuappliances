import React, { useState } from 'react'
import  ClassicEditor from 'ckeditor5-custom-build/build/ckeditor'
import {CKEditor} from '@ckeditor/ckeditor5-react';

const BlogEditor = ({state,setState}) => {

  const handleChange = (e,editor) => {
    setState(editor.getData())
  }


  return (
   <>
    <CKEditor
     editor={ClassicEditor}
     data={state}
     onChange={(e,editor)=>{handleChange(e,editor)}}
     config={{
      height: '300px', // Set the initial height
      // plugins: [Base64UploadAdapter],
    //   toolbar: ['undo', 'redo',
    //   '|', 'heading',
    //   '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
    //   '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
    //   '|', 'link', 'uploadImage', 'mediaEmbed','blockQuote', 'codeBlock',
    //   '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent','fontSize']
     toolbar: [
    'alignment',
		'autoImage',
		'autoLink',
		'autoformat',
		'base64UploadAdapter',
		'blockQuote',
		'bold',
		'essentials',
		'fontSize',
		'heading',
		'image',
		'imageCaption',
		'imageUpload',
		'italic',
		'link',
		'list',
		'mediaEmbed',
		'paragraph',
		'pasteFromOffice',
		'table',
		'tableToolbar',
		'textTransformation'
     ]
     }}
     onReady={(editor) => {
      editor.ui.view.editable.element.style.minHeight = "300px";
      }}
      onBlur={(event, editor) => {
        console.log(event)
        editor.ui.view.editable.element.style.minHeight = '300px';
      }}
      onFocus={(event, editor) => {
        editor.ui.view.editable.element.style.minHeight = "300px";
      }}
    />
   </>
  )
}

export default BlogEditor