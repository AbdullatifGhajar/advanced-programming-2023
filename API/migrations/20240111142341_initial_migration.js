
exports.up = function(knex) {
	return knex.schema.createTable('fields', (table) => {
        table.increments('id')
		table.string('name').notNullable();
		table.string('value').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('fields');
};
