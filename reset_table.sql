use show_do_milhao;

drop table perguntas;

create table perguntas like perguntas_backup;

INSERT perguntas SELECT * FROM perguntas_backup;