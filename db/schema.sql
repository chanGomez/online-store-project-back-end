DROP DATABASE IF EXISTS onlinestore_dev;

CREATE DATABASE onlinestore_dev;

\c onlinestore_dev;

DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 size TEXT,
 category TEXT,
 gender TEXT,
 condition TEXT NOT NULL,
 color TEXT,
 discription TEXT NOT NULL,
 price INTEGER,
 url TEXT
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
 id SERIAL PRIMARY KEY,
 commenter TEXT,
 content TEXT,
 article_id INTEGER REFERENCES articles (id)
 ON DELETE CASCADE
);