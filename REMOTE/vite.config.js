import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {federation} from '@module-federation/vite'
import tailwindcss from '@tailwindcss/vite'
//import federation from '@originjs/vite-plugin-federation'
//import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    
    federation({
      name: 'remoteApp',
      filename:'remoteEntry.js',
      exposes:{
        './App':'./src/App.jsx'
      },
      shared:{
        react:{singleton:true},
        'react-dom':{singleton:true}
      },
      remoteType:'module'
    }),react(),
    tailwindcss()
  ],
  server:{
    port:5174
  },
  build:{
    target:'esnext'
  }

})
