import bookshelf from '../bookshelf';
import Package from './package';
import User from './User';

const Shelter = bookshelf.Model.extend({
  tableName: 'shelter', //has one shelter
  // shelter has many packages --> package one shelter
  packages: function() {
    return this.hasMany(Package);
  }
});

export default Shelter;

export function getAllShelters() {
  return Shelter.fetchAll();
}

export function getScheduledPackages() {

  // return qb.where(knex.raw(query));

  return Shelter.forge({id: 1})
  .fetch({ withRelated: ['packages'] })
  .then(function(shelter) {
    return shelter.related('packages');
    // console.log(packages.toJSON());
    console.log("users_id", packages.user);
    console.log(packages.map(p => p.user_id));
  }).catch(function(err) {
    console.error(err);
  });
}
