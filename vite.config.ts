import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/My-Resume/' // Replace 'My-Resume' with your GitHub repository name
});
