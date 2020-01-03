# Backend

Backend repository for https://github.com/luismartinezs/todo-app-vue

## Run locally

### Local machine

Run a local instance of psql, e.g.:

```
chcp 1252 # Windows
psql -U postgres
CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
ALTER ROLE api_user CREATEDB;
\q
psql -d postgres -U api_user
CREATE DATABASE todos_api;
\c todos_api
CREATE TABLE todo (ID SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, description VARCHAR(255), done BOOLEAN NOT NULL);
INSERT INTO todo (title, description, done) VALUES ('Study', 'Read biology book', TRUE);
```

`npm run start:dev`

### Docker

Have docker running in your machine, and be logged in with your docker id
Make sure postgresql is not running locally or it will keep the required ports busy

```
docker-compose build
docker-compose up -d
docker-compose down # Bring down the containers
```


## Useful references

https://devhints.io/knex