import { defineConfig } from 'vite';
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/scss/abstracts/index" as *;`
      }
    }
    
  },
  base: '/', // 루트 도메인 배포용
  build: {
    outDir: 'dist'
  }
});
