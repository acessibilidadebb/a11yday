module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Desabilita regras chatas
    'react-hooks/exhaustive-deps': 'off', // Para de encher sobre useEffect
    '@typescript-eslint/no-unused-vars': 'off', // Para de reclamar de variáveis não usadas
    '@typescript-eslint/no-explicit-any': 'off', // Permite usar 'any'
    'no-empty': 'off', // Permite blocos vazios como catch (e) {}
  },
}
