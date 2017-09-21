import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

//export default Ember.Route.extend();

export default Ember.Route.extend(ApplicationRouteMixin, {
  userConfig: Ember.inject.service(),
  fb: Ember.inject.service(),

   // beforeModel() {

   // },

  // model: function(params) {
  //   console.log('model params:', params);

  //   return new Ember.RSVP.hash({
  //     users: Ember.$.ajax({
  //       type: 'GET',
  //       url: `http://localhost:3000/users/${params.id}`
  //     }),
  //     points: Ember.$.ajax({
  //       type: 'GET',
  //       url: `http://localhost:3000/users/${params.id}/points`
  //     })
  //   })
  // },


  setupController: function(controller, models) {
    this.get('userConfig').setUserHash(this.get('session.data.authenticated.username')).then(result => {
      controller.set('userHash', this.get('userConfig.userHash'));
    });
    // controller.set('user', models.users)
    // controller.set('points', models.points)

  }

});
