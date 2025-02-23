require("dotenv").config();

// @ts-ignore
const sql = require("mssql");

// Configurazione della connessione
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Funzione per connettersi al database
async function connectDB() {
  try {
    await sql.connect(config);
    console.log("✅ Connesso a SQL Server!");
  } catch (error) {
    console.error("❌ Errore nella connessione al database:", error);
  }
}

module.exports = { connectDB, sql };


