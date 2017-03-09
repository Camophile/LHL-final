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