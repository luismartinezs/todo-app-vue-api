-- Deploy fresh database tables
\i '/docker-entrypoint-initdb.d/tables/todo.sql'
\i '/docker-entrypoint-initdb.d/tables/user.sql'

\i '/docker-entrypoint-initdb.d/seed/seed.sql'