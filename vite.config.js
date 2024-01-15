import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log("=>(vite.config.js:10) env", env.VITE_APP_ENV);
  return {
    // Vite 설정
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
    plugins: [react()],
    resolve:{
      alias:{
        '@': path.resolve(__dirname, 'src'),
      }
    },
    server: {
      // port: 5000
    }
  }
})