"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchdata = void 0;
const Pool = require('pg').Pool;
const pool = new Pool({ connectionString: "postgres://ollqubur:IFAzUn4Q3X7vWYu1mUDjkx6eafwmphEs@jelani.db.elephantsql.com/ollqubur" });
const fetchdata = async (SQL, ...params) => {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(SQL, params.length ? params : null);
        return rows;
    }
    finally {
        client.release();
    }
};
exports.fetchdata = fetchdata;
