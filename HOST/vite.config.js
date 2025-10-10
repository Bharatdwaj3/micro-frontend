import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import {federation} from '@module-federation/vite'

//import federation from '@originjs/vite-plugin-federation'
//import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
    federation({
      name: 'host_app',
      filename: 'remoteEntry.js',
      remotes:{
        remoteApp:{
          entry:'http://localhost:5174/remoteEntry.js'
          ,type:'module'
        }},
      shared:{
        react:{singleton:true},
        'react-dom':{singleton:true}}
    })
  ],
  server:{
    port:5175
  },
  build:{
    target:'esnext'
  }
})
