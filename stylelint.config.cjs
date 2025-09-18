module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {
        'no-descending-specificity': null,
        'at-rule-no-unknown': null,
        'function-no-unknown': null,
    },
    ignoreFiles: ['**/*.{js,jsx,ts,tsx,md}', 'node_modules', '.next', 'dist', 'build'],
};
