import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', { path: '/users'}, function() {
    this.route('transactions', {path: '/:id/transactions'});
  });
  this.route('stores', { path: '/stores'});
});

export default Router;
