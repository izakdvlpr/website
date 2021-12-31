module.exports = {
  extends: [
    '@hitechline/eslint-config/web',
    '@hitechline/eslint-config/typescript',
  ],
  rules: {
    'react/require-default-props': 'off',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
      },
    ],
  },
};
