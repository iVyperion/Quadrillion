import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: "localhost",
    user: "root",
    database: "quadrillion",
    password: "",
});

export { pool } ;