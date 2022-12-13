const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "root",
    database: "testWad",
    host: "localhost",
    port: "5432"
});
const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// A simple query that creates a table in our database
// Note that the "SERIAL"  pseudo-type that is used after the "id" is used to create a sequence object,
// and set the next value generated by the sequence as the default value for the column
const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "urllink" VARCHAR(200)  
    );`;

    const createUserTblQuery = `
    CREATE TABLE IF NOT EXISTS "userlogin" (         
	    "username" VARCHAR(200) NOT NULL,
	    "password" VARCHAR(200) NOT NULL  
    );`;

// A function to execute the previous query   
execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exist, create the "posttable" table');
    }
});

execute(createUserTblQuery).then(result => {
    if (result) {
        console.log('If does not exist, create the "userlogin" table');
    }
});

module.exports = pool;