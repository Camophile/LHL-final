import bookshelf from '../bookshelf';

const Grocery = bookshelf.Model.extend({
  tableName: 'grocery',
  boxes: function() {
    return this.hasMany(Boxes);
  }
});

export default Grocery;

export function getAllGroceries() {
  return Grocery.fetchAll()
}
