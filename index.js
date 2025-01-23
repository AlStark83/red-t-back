const app = require('./src/app.js');
const { conn } = require('./src/db.js');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await conn.sync({ force: true });
    console.log('Base de datos sincronizada');
    app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
})();
