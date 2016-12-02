static preloader for meteor
----

# Install
## meteor
```
meteor add flynn:static-preloader
```
## typings
```
typings install meteor-static-preloader=github:niceilm/meteor-static-preloader/static-preloader.d.ts#7e8f073b8aff7de1f0af9f3553b96cc6f56513bd --global --save
```

# Server
```
import { StaticPreloader } from 'meteor/flynn:static-preloader';

new StaticPreloader()
  .setPrefix(Meteor.isDevelopment ? 'http://localhost:8080' : '')
  .setBody('<app></app>')
  .setPreloadCSS(['/gen/initial.css'])
  .setPreloadJS(['/gen/polyfills.js', '/gen/vendor.js', '/gen/main.js']).build();
```

# Why
- when use webpack
- css/js file load in page loading time
