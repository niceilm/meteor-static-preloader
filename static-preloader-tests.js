// Import Tinytest from the tinytest Meteor package.
import {Tinytest} from "meteor/tinytest";
// Import and rename a variable exported by static-preloader.js.
import {StaticPreloader} from "meteor/flynn:static-preloader";

// Write your tests here!
// Here is an example.
Tinytest.add('static-preloader - example', function (test) {
  test.equal(!!StaticPreloader, true);
});
