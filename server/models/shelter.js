import bookshelf from '../bookshelf';

const Shelter = bookshelf.Model.extend({
  tableName: 'shelter' //has one shelter
  // shelter has many packages --> package one shelter
});

export default Shelter;

export function getAllShelters() {
  return Shelter.fetchAll();
}