BEGIN TRANSACTION; -- BEGIN TRANSACTION ... COMMIT ==> If something fails inside, don't do anything

CREATE TABLE todo (
  ID SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  done BOOLEAN NOT NULL
);

COMMIT;