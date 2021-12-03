
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNO_DICIPLINA', table => {
        table.integer('periodo')
        table.float('nota')
        table.integer('ID_AL')
        table.integer('ID_DI')
        table.foreign('ID_AL').references('TB_ALUNOS.id')
        table.foreign('ID_DI').references('TB_DISCIPLINAS.id')
        table.primary(['ID_AL','ID_DI'])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNO_DICIPLINA')
};
