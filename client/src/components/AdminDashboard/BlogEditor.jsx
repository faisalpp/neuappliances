import React, { useState } from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


const BlogEditor = ({state,setState,quillRef,config}) => {

  const [data,setData] = useState('')

  const handleChange = (e,editor) => {
    setData(editor.getData())
  }

  return (
   <>
   <div>
    <CKEditor
     editor={ClassicEditor}
     onChange={(e,editor)=>{handleChange(e,editor)}}
    />
    {data}
    </div>
   </>
  )
}

export default BlogEditor