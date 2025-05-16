import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-repo-name' with your actual GitHub repo name
export default defineConfig({
  base: '/https://github.com/Yubin935/Portfolio/',  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
