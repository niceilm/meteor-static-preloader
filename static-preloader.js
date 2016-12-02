import {Inject} from "meteor/meteorhacks:inject-initial";

export class StaticPreloader {
  constructor() {
    this.prefix = '';
    this.preloadJS = [];
    this.preloadCSS = [];
    this.headCSS = '';
    this.body = '';
  }

  setPrefix(prefix) {
    this.prefix = prefix;
    return this;
  }

  setPreloadJS(preloadJS) {
    this.preloadJS = preloadJS;
    return this;
  }

  setPreloadCSS(preloadCSS) {
    this.preloadCSS = preloadCSS;
    return this;
  }

  setHeadCSS(headCSS) {
    this.headCSS = headCSS;
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  setInlineJS() {
    WebAppInternals.setInlineScriptsAllowed(false);
    this.preloadJS.forEach(jsFileName => {
      WebAppInternals.additionalStaticJs[`${this.prefix}${jsFileName}?hash=${__meteor_runtime_config__.autoupdateVersion}`] = '';
    });
  }

  setInlineCSS() {
    this.preloadCSS.forEach(cssFileName => {
      this.headCSS += `<link href="${this.prefix}${cssFileName}?hash=${__meteor_runtime_config__.autoupdateVersion}" rel="stylesheet">\n`;
    });
  }

  setInject() {
    Inject.rawHead('head-css', this.headCSS);
    Inject.rawBody('body', this.body);
  }

  build() {
    this.setInlineJS();
    this.setInlineCSS();
    this.setInject();
  }
}