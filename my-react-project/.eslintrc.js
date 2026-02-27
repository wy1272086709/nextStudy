module.exports = {
  rules: {
    'no-cond-assign': ['error', 'always'],
    // 开启一些TS规则
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // Vite 项目默认 ES Module
    project: './tsconfig.json', // 关联 tsconfig，确保解析规则匹配项目配置
    ecmaFeatures: {
      jsx: true // React + TSX 项目需开启
    }
  },
  // 添加@typescript-eslint/eslint-plugin 来拓展一些关于 TS 代码的规则
  // 启用 TS 专属 ESLint 插件
  plugins: ['@typescript-eslint', 'react'], // React 项目保留 react 插件
  // 继承 TS 推荐规则
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TS 基础推荐规则
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 更严格的 TS 类型检查（可选）
    'plugin:react/recommended', // React 项目保留
    'plugin:react/jsx-runtime' // 适配 React 18+ 自动导入 jsx-runtime
  ],
  rules: {
    // 示例：自定义 TS warning 规则
    '@typescript-eslint/no-unused-vars': 'warn', // 未使用变量提示 warning
    '@typescript-eslint/no-explicit-any': 'warn', // 使用 any 类型提示 warning
    'react/prop-types': 'off', // TS 项目无需 prop-types，关闭该规则
    'no-console': 'warn' // 控制台输出提示 warning
  },
  "env": {
    browser: true,
    es2021: true,
    node: true
  },
  "globals": {
    "$": false,
    "jQuery": false,
  },
  settings: {
    react: {
      version: 'detect' // 自动检测 React 版本
    }
  }
}