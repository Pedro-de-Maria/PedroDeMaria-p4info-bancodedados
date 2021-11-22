const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./prova04/database/db.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists TB_ALUNOS (id integer primary key autoincrement , NM_AL text)', (error) => {
        if (error) console.log(error);
    });

    db.run('create table if not exists TB_ALUNO_DICIPLINA (Periodo integer , Nota float , ID_AL integer, ID_DI integer, foreign key(ID_AL) references TB_ALUNOS(id), foreign key(ID_DI) references TB_DISCIPLINAS(id), primary key(ID_AL,ID_DI))', (error) => {
        if (error) console.log(error);
    });

    db.run('create table if not exists TB_DISCIPLINAS (id integer primary key autoincrement , NM_DI text', (error) => {
        if (error) console.log(error);
    });


    


});