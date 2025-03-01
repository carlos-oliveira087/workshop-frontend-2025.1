import { defineConfig } from 'vite';

export default defineConfig({
  base: '/workshop-frontend/',  // Este deve ser o caminho base do seu repositório GitHub Pages
  build: {
    outDir: 'dist',  // Diretório de saída do build
  },
});
