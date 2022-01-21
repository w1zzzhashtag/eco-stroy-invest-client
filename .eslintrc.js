module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'max-len': ['error', { code: 120 }],
        'no-console': 'warn',
        'react/prop-types': 0,
    },
};
