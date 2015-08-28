import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  addressLine: DS.attr(),
  postCode: DS.attr(),
  country: DS.attr()
});

User.reopenClass({
  FIXTURES: [{
    id: 1,
    firstName: 'James',
    lastName: 'Rice',
    addressLine: '66 Belvue Road',
    postCode: 'M235PS',
    country: 'United Kingdom'
  }]
});
