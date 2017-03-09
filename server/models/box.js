import bookshelf from '../bookshelf';

const Box = bookshelf.Model.extend({
  tableName: 'box',
  grocery: function() {
    return this.belongsTo(Grocery);
  },
  package: function() {
    return this.belongsTo(Package);
  }
});

export default Box;

export function getAllBoxes() {
  return Box.fetchAll()
}
