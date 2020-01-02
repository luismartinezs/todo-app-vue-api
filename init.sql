CREATE TABLE todo (
  ID SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  done BOOLEAN NOT NULL
);

INSERT INTO todo (title, description, done)
VALUES  ('Study', 'Read biology book', TRUE);