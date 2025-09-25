module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)(\(([\w\-_,\s]+)\))?!?: (.+)$/,
      headerCorrespondence: ['type', 'scopeWithParens', 'scope', 'subject'],
    },
  },
  rules: {
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'scope-empty': [0], // optional
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'init',
        'release',
        'wip',
        'merge',
      ],
    ],
  },
};
