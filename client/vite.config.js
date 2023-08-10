import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'rollup-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjs(),
  ],
  build: {
    outDir: 'build', // Change this to your desired output directory name
  },
  commonjsOptions: {
    exclude: [
          'ckeditor5-custom-build', 
    ]
},
optimizeDeps: {
  include: [
        'ckeditor5-custom-build',
  ],
}
})
