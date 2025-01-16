/* global module */
module.exports = {
    parser: '@typescript-eslint/parser', // 각 코드를 분석할 parser를 지정
    // parser의 추가적인 옵션을 설정
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Enable JSX
      },
    },
    // eslint role 설정이 되어있는 외부 file을 extends
    extends: [
      'eslint:recommended', 
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended', // TypeScript에서 제공하는 권장 설정을 사용
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    plugins: ['prettier'],
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    env: {
      browser: true,
      es2020: true,
    },
    // 사용자 정의 규칙을 설정
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable for new React versions
      '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
      'prettier/prettier': 'error', // Prettier 규칙을 ESLint로 확인
    },
  };
  