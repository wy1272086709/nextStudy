import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 当修改了root 属性之后，需要修改publicDir属性
  root: path.join(__dirname, 'src'),
  publicDir: path.join(__dirname, 'public'),
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  css: {
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@use "@/styles/_variable" as *;`,
          // 让 Sass 识别 @ 别名
      },
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions', 'ie >= 7']
        })
      ],
    },
  },
  build: {
    // 默认情况下，Vite 会在 dist 目录下生成静态资源
    // 如果需要将静态资源放在一个自定义的目录下
    outDir: path.join(__dirname, 'dist'),
  },
})