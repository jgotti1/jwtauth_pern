
# ************** DATABASE *********************************** 

 # You need a local postgres  database to run this project -->
# The commands belwon can be used to setup your postgres DB -->


# Command to create the DB -->
CREATE DATABASE jwtpern;

# switch to that new database
\c jwtpern

# Setup this extension for advanced id generation -->

# Command to enable the uuid-ossp extension (if not already enabled used to create user ids)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

# Create you table and columns -->
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

#  Command to create a test user -->
INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henry123@gmail.com', 'test123');

# Check you test data  -->
SELECT * FROM users;



#  **********************PROJECT SETUP ***************
# This Project is an example of a React Login front end with a create user page using a Express backend and postgres database.
#  Uses JWT, bcrypt as well for this "PERN" app-->

  cd into the client and server folders
  run npm i to install dependencies in each

Your server side .env file should match your local setup for postgres

# *****  .evv Example (you need to create a .env on the server side)*************
# reference https://jwt.io/ for more inormation about your jwtsecret in the env file

# PORT Number for DEV
PORT=5000

# Development DB will pickup automaticly with PG connection
  PGUSER=postgres
  PGHOST=localhost
  PGPASSWORD=postgres
  PGDATABASE=jwtauth
  PGPORT=5432

# Token
  jwtSecret = "secretKey"

