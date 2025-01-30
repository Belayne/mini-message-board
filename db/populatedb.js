import pg from "pg";
const { Client } = pg;

const SQLquery = `
INSERT INTO messages (message, username, timestamp)
VALUES 
    ('Jesse, we need to cook. Where are you?', 'Walter White', '${new Date().valueOf()}'),
    ('Yo, chill, Mr. White. I’m getting the supplies.', 'Jesse Pinkman', '${new Date().valueOf()}'),
    ('You were supposed to be here an hour ago. Time is money, Jesse.', 'Walter White', '${new Date().valueOf()}'),
    ('Maybe if you two stopped texting and started working, we wouldn’t have this problem.', 'Mike Ehrmantraut', '${new Date().valueOf()}'),
    ('Walter, efficiency is key. If Jesse is delaying the operation, I need to know.', 'Gustavo Fring', '${new Date().valueOf()}'),
    ('Relax, Gustavo. I got this, man. Just ran into a little problem with Badger.', 'Jesse Pinkman', '${new Date().valueOf()}'),
    ('Oh great, what did the Tweedledee and Tweedledum of meth distribution do now?', 'Saul Goodman', '${new Date().valueOf()}'),
    ('They kinda, sorta lost a batch.', 'Jesse Pinkman', '${new Date().valueOf()}'),
    ('Lost a batch?! Are you kidding me, Jesse?!', 'Walter White', '${new Date().valueOf()}'),
    ('I’ll handle it. Don’t do anything stupid.', 'Mike Ehrmantraut', '${new Date().valueOf()}');
`

const {user, password, database, dbPORT, host} = process.env;

async function main() {
    console.log("Seeding...");
    console.log(host);
    const client = new Client({
        connectionString: `postgresql://${user}:${password}@${host}:${dbPORT}/${database}`,
    });
    await client.connect();
    await client.query(SQLquery);
    await client.end();
    console.log("done");
};

main();

