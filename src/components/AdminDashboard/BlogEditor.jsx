import React, { useRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = ({state,setState,quillRef,config}) => {

  return (
   <>
   <div>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={config}
      />
    </div>
   </>
  )
}

export default BlogEditor