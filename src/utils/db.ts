const Pool = require('pg').Pool

const pool = new Pool({connectionString : "postgres://ollqubur:IFAzUn4Q3X7vWYu1mUDjkx6eafwmphEs@jelani.db.elephantsql.com/ollqubur" })



export const fetchdata = async (SQL:string, ...params:any[]) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null )         
        return rows        
    }finally {
        client.release()
    }
}
