// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer' // 2. 导入插件

const isProduction = process.env.NODE_ENV === 'production' // 3. 检查环境变量

export default defineConfig({
  plugins: [
    vue(),

    visualizer({
      open: true, // 在默认浏览器中自动打开报告
      gzipSize: true, // 显示 gzip 后的大小
      brotliSize: true, // 显示 brotli 后的大小
      filename: 'dist/stats.html', // 分析报告输出的文件名
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    drop: isProduction ? ['console', 'debugger'] : [],
    legalComments: 'none',
    target: 'esnext',
  },
  server: {
    port: 3000,
    open: true,
  },
})
