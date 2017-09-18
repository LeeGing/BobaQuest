import Ember from 'ember';

export default Ember.Controller.extend({
  reservationTime: null,
  selectedCafe: null,

  reservation_time : [
    {name: '12:00PM'},
    {name: '12:30PM'},
    {name: '1:00PM'},
    {name: '1:30PM'},
    {name: '2:00PM'},
    {name: '2:30PM'},
    {name: '3:00PM'},
    {name: '3:30PM'},
    {name: '4:00PM'},
    {name: '4:30PM'},
    {name: '5:00PM'},
    {name: '5:30PM'},
    {name: '6:00PM'},
    {name: '6:30PM'},
    {name: '7:00PM'},
    {name: '7:30PM'},
    {name: '8:00PM'},
    {name: '8:30PM'},
    {name: '9:00PM'},
    {name: '9:30PM'},
    {name: '10:00PM'},
    {name: '10:30PM'},
    {name: '11:00PM'},
    {name: '11:30PM'},
    {name: '12:00AM'}
  ],

  cafe: [
    {name: 'Bubble World Downtown'},
    {name: 'Bubble World Vancouver'},
    {name: 'Bubble World Coquitlam'},
    {name: 'Bubble World Burnaby'},
    {name: 'Bubble World Richmond'},
    {name: 'Bubble World SFU'},
    {name: 'Chatime Downtown'},
    {name: 'Chatime Boardway'},
    {name: 'Chatime Burnaby'},
    {name: 'Chatime Richmond'},
    {name: 'Chatime Surrey'},
    {name: 'SoulCup'},
    {name: 'Coco Downtown'},
    {name: 'Coco Vancouver'},
    {name: 'Coco Richmond'}
  ],

  actions: {

    setReservationTime: function(reservationTime) {
      this.set('reservationTime', reservationTime);
    },

    setCafe: function(selectedCafe) {
      this.set('selectedCafe', selectedCafe);
    },

    sendReservation: function(){
      var reservationName = this.get('reservationName');
      var reservationPhone = this.get('reservationPhone');
      var selectedCafe = this.get('selectedCafe');
      var numberGuest = this.get('numberGuest');
      var reservationDate = this.get('reservationDate');
      var reservationTime = this.get('reservationTime');



    }
  }
})


