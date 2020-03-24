exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){ 
        //PRIMARY KEY
        table.increments();

        //COLUMNS
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //ASSOCIATION 
        table.string('ong_id').notNullable();
        //FOREING KEY
        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
