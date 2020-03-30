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

`npm run start:dev` or `npm run start`

### Docker

You may need to run `sudo chmod 777 /var/run/docker.sock` on Ubuntu

```
docker build -t todo-app .
docker run -it -p 3000:3000 todo-app # Expose port 3000 of container to port 3000 of localhost
npm run start # Inside docker container
```

### Docker compose

Have docker running in your machine, and be logged in with your docker id
Make sure any services like postgresql are not running locally or they will keep the required ports busy (`sudo pkill -u postgres`)

```
docker-compose down # Bring down all the services (do it at the start, to avoid any existing container interfering)
docker-compose up --build
docker-compose up -d # -d to run in the background
```


## Useful references

https://devhints.io/knex