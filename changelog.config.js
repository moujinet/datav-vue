// https://github.com/streamich/git-cz
module.exports = {
  'disableEmoji': false,
  'list': ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'ci', 'chore'],
  'questions': [ 'type', 'scope', 'subject', 'body', 'breaking', 'issues'],
  'scopes': ['core', 'style', 'docs', 'util', 'store', 'dev', 'suspense'],
  'maxMessageLength': 72,
  'minMessageLength': 3,
  'types': {
    'feat': {
      'description': 'A new feature',
      'emoji': '🎸',
      'value': 'feat',
    },
    'fix': {
      'description': 'A bug fix',
      'emoji': '🐛',
      'value': 'fix',
    },
    'docs': {
      'description': 'Documentation only changes',
      'emoji': '✏️',
      'value': 'docs',
    },
    'style': {
      'description': 'Markup, white-space, formatting, missing semi-colons...',
      'emoji': '💄',
      'value': 'style',
    },
    'refactor': {
      'description': 'A code change that neither fixes a bug or adds a feature',
      'emoji': '💡',
      'value': 'refactor',
    },
    'perf': {
      'description': 'A code change that improves performance',
      'emoji': '⚡️',
      'value': 'perf',
    },
    'test': {
      'description': 'Adding missing tests',
      'emoji': '💍',
      'value': 'test',
    },
    'ci': {
      'description': 'CI related changes',
      'emoji': '🎡',
      'value': 'ci',
    },
    'chore': {
      'description': 'Build process or auxiliary tool changes',
      'emoji': '🤖',
      'value': 'chore',
    },
    'release': {
      'description': 'Create a release commit',
      'emoji': '🏹',
      'value': 'release',
    },
  },
}