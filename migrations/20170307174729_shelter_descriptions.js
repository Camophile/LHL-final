exports.up = function(knex, Promise) {
  return knex.schema.table('shelter', function(table) {
      table.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('shelter', function(table) {
      table.dropColumn('description');
  });
};