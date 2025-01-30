import pg from "pg";
const { Pool } = pg;

function getDatabaseURL() {

    if(process.env.NODE_ENV === "production") {
        const dbURL = process.env.databaseURL;
        return dbURL

    }
    else {
        const {host, user, database, password, dbPORT} = process.env;
        const dbURL = `postgresql://${user}:${password}@${host}:${dbPORT}/${database}`;
        return dbURL
    }
}

export default new Pool({
    connectionString: getDatabaseURL()
})