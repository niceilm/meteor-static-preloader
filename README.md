static preloader for meteor
----

# Install
```
meteor add flynn:static-preloader
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
