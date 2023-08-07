import React, { useState } from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


const BlogEditor = ({state,setState}) => {

  const handleChange = (e,editor) => {
    setState(editor.getData())
  }


  return (
   <>
    <CKEditor
     editor={ClassicEditor}
     value={state}
     onChange={(e,editor)=>{handleChange(e,editor)}}
     config={{
      height: '300px', // Set the initial height
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