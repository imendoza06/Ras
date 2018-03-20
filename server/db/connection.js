// Loading and initializing the library:
const pgp = require("pg-promise")({});

// Preparing the connection details:
const connectionString = "postgres://c4q:c4q@localhost:5432/rasDB";

// Creating a new database instance from the connection details:
const db = pgp(connectionString);

// Exporting the database object for shared use:
module.exports = db;
