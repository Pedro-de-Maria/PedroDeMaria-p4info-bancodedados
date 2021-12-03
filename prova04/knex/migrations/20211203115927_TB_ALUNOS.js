
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNOS', table => {
        table.integer('id').primary()
        table.string('nome')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNOS')
};