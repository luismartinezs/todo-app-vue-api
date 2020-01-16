BEGIN TRANSACTION;
-- BEGIN TRANSACTION ... COMMIT ==> If something fails inside, don't do anything

CREATE TABLE user (
  ID SERIAL PRIMARY KEY,
  email text UNIQUE NOT NULL,
  hash VARCHAR(100) NOT NULL
);

COMMIT;