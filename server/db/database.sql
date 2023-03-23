CREATE DATABASE jwtpern;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- enable the uuid-ossp extension (if not already enabled)

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL
);

CREATE TABLE todo(
  todo_id SERIAL,
  user_id UUID ,
  description VARCHAR(255),
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
)

-- \command to creat test data
INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');