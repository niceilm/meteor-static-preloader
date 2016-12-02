declare module 'meteor/flynn:static-preloader' {
  class StaticPreloader {
    setPrefix(prefix: string): StaticPreloader;

    setPreloadJS(preloadJS: string[]): StaticPreloader;

    setPreloadCSS(preloadCSS: string[]): StaticPreloader;

    setHeadCSS(headCSS: string): StaticPreloader;

    setBody(body: string): StaticPreloader;

    build();
  }
}
