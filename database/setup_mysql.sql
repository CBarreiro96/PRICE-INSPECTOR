-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS price_inspector_db;
CREATE USER IF NOT EXISTS 'p_inspector_dev'@'localhost' IDENTIFIED BY 'inspector';
GRANT ALL PRIVILEGES ON `price_inspector_db`.* TO 'p_inspector_dev'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'p_inspector_dev'@'localhost';
FLUSH PRIVILEGES;
