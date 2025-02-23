require("dotenv").config();
const { connectDB, sql } = require("../db");

async function getStudents() {
  try {
    await connectDB(); // Assicura la connessione al DB
    const result = await sql.query("SELECT * FROM Students");
    console.log("📄 Lista degli studenti:");
    console.table(result.recordset); // Stampa i dati in tabella
  } catch (error) {
    console.error("❌ Errore nel recupero degli studenti:", error);
  } finally {
    sql.close(); // Chiude la connessione al DB
  }
}

getStudents();
