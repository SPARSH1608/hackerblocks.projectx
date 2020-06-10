import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  language: DS.attr(),
  details: DS.attr(),
  time_limits: DS.attr(),
  source_url: DS.attr(),
  solution_dirs: DS.attr(),
  contest: DS.belongsTo('contest'),
});
