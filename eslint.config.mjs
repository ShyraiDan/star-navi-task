import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  { ignores: ['node_modules', 'dist', 'build', 'coverage'] },
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      import: importPlugin
    },
    rules: {
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',

      'prefer-nullish-coalescing': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          jsxSingleQuote: true,
          semi: false,
          trailingComma: 'none',
          printWidth: 120,
          bracketSameLine: true
        }
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'quote-props': ['error', 'as-needed'],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'max-len': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])
