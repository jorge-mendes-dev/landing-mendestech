module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      },
      alias: {
        map: [
          ['@', './src'],
          ['components', './src/components'],
          ['assets', './src/assets'],
          ['routes', './src/routes'],
          ['utils', './src/utils'],
          ['hooks', './src/hooks'],
          ['config', './src/config'],
          ['pages', './src/pages']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    },
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
