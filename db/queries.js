import pool from "./pool.js";

function query(query_string, parameters, callback) {
    return pool.query(query_string, parameters);
}

async function getAllMessages() {
    const { rows } = await query("SELECT * FROM messages");
    return rows;
}

async function insertNewMessage(message, timestamp, username) {
    await query("INSERT INTO messages (message, timestamp, username) VALUES (($1),($2),($3))", [message, timestamp, username]);
}

const db = {
    getAllMessages,
    insertNewMessage
}

export default db;

