module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:prettier/recommended',
        'react-app',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'max-len': ['error', { 'code': 120 }],
        "@typescript-eslint/no-explicit-any": ["off"]
    },
    ignorePatterns: ['node_modules/', 'migrations/'] // Add the directories you want to ignore here
};