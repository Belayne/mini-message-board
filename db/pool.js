import pg from "pg";
const { Pool } = pg;

const {host, user, database, password, dbPORT} = process.env;

export default new Pool({
    connectionString: `postgresql://${user}:${password}@${host}:${dbPORT}/${database}`
})