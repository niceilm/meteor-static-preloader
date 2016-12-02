Package.describe({
  name: 'flynn:static-preloader',
  version: '0.0.1',
  summary: 'JS, CSS preload',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.use('webapp', 'server');
  api.use('meteorhacks:inject-initial@1.0.4');
  api.mainModule('static-preloader.js', ['server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('flynn:static-preloader');
  api.mainModule('static-preloader-tests.js');
});
