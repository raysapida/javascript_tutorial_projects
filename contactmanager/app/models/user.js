import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  addressLine: DS.attr(),
  postCode: DS.attr(),
  country: DS.attr()
});
