-- docker/postgres/init/init.sql

-- สร้าง database ถ้ายังไม่มี
CREATE DATABASE photobooth;

-- สร้าง extension สำหรับ UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";