Package.describe({
  name: 'jss:pace',
  version: '1.0.0',
  summary: 'Automatic page load progress bar',
  git: 'https://github.com/JSSolutions/meteor-pace',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('pace.js', 'client');
});
