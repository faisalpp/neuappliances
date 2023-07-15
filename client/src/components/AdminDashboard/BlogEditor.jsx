import React, { useState } from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


const BlogEditor = ({state,setState}) => {

  const handleChange = (e,editor) => {
    setState(editor.getData())
  }

  const editorConfig = {
    height: '600px', // Set the desired height here
    // other configuration options...
  };

  return (
   <>
   <div>
    <CKEditor
     editor={ClassicEditor}
     onChange={(e,editor)=>{handleChange(e,editor)}}
     config={editorConfig}
    />
    </div>
   </>
  )
}

export default BlogEditor