import AddonDocsRouter, {docsRoute} from 'ember-cli-addon-docs/router';
import config from './config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    // this.route('compatibility');
    // this.route('installation');
    this.route('usage');
    // this.route('dropdownevents');
    // this.route('triggerevents');
    // this.route('position');
    // this.route('disabled');
    // this.route('overlays');


  });
  this.route('not-found', { path: '/*path' });
});
