module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '^@/app/(.*)$',
        '^@/entities/(.*)$',
        '^@/features/(.*)$',
        '^@/pages/(.*)$',
        '^@/processes/(.*)$',
        '^@/shared/(.*)$',
        '^@/widgets/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
