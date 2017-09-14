import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
    $('.ad-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });
  }
});
