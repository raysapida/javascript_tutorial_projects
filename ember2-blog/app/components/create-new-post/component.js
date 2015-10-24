import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function () {
      console.log(newPost.title, newPost.author);
    }
  }
});
