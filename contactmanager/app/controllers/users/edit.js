import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveUser: function(user){
      user.save();
      this.transitionToRoute('users');
    }
  }
});
