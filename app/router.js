import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', { path: '/users/:id'}, function() {
     // this.route('stores', { path: '/stores'});
     // this.route('transactions', {path: '/:id/transactions'});
  });

  this.route('stores', { path: '/stores/:id'});
});

export default Router;
