-- Portfolio Database Schema
-- Run this file to initialize the database tables:
--   psql -U your_user -d portfolio_db -f models/schema.sql

CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS visitors (
  id SERIAL PRIMARY KEY,
  ip VARCHAR(50),
  page VARCHAR(100),
  visited_at TIMESTAMP DEFAULT NOW()
);
