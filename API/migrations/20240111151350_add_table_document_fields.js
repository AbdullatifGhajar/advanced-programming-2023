
exports.up = function(knex) {
	return knex.schema.createTable('document_fields', (table) => {
        table.integer('document_id').unsigned();
        table.integer('field_id').unsigned();
        table.foreign('document_id').references('documents.id');
        table.foreign('field_id').references('fields.id');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('document_fields');
};
