import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Để dùng Ant Design theme
        modifyVars: {
          '@primary-color': '#1DA57A', // Ví dụ đổi màu chính
        },
      },
    },
  },
});