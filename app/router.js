import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', { path: '/users/:id'}, function() {
     this.route('points')
  });

  this.route('stores', { path: '/stores/:id'}, function() {
    this.route('admin', { path: 'admin' })
  });
  this.route('register');
  this.route('login');
  this.route('protected');
  this.route('welcome');
});

export default Router;
