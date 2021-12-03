
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_DISCIPLINAS', table => {
        table.integer('id').primary()
        table.text('NM_DI')
       
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_DISCIPLINAS')
};