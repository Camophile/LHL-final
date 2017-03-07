import bookshelf from '../bookshelf';
// import Package from './package';

const ShelterForm = bookshelf.Model.extend({
  tableName: 'shelter', //has one shelter
  // shelter has many packages --> package one shelter
  packages: function() {
    return this.hasMany(Package);
  }
});

export default ShelterForm;

// export function getShelterData(data) {
//   return Package.query({
//     where: {shelter_id: 1}
//   })
// }

ShelterForm.where('id', 1).fetch({withRelated: ['package']}).then(function(user) {
  console.log(ShelterForm.related('').toJSON());
}).catch(function(err) {
  console.error(err);
});

// export function getUserData() {
//   return ShelterForm.forge({id: 1}).fetch({withRelated: ['package']})
// }