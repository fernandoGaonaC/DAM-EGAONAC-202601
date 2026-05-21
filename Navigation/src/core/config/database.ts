import { open } from "react-native-quick-sqlite";

export const db=open({
    name:'navigation_database.sqlite'
});
export const setupDataBase = () => {
  try {
    db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        correo TEXT NOT NULL,
        fechaNacimiento TEXT,
        contrasena TEXT NOT NULL
      );
    `);

    db.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        codigo TEXT NOT NULL,
        cantidad INTEGER NOT NULL,
        costo REAL NOT NULL,
        precioVenta REAL NOT NULL,
        descripcion TEXT,
        userId INTEGER NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
      );
    `);
  } catch (error) {
    console.log("No se ha podido inicializar la BBDD", error);
  }
};
