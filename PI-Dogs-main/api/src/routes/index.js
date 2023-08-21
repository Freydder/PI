const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routes = Router();

routes.get("/", (req, res) => {
    console.log("Haciendo la primer consulta"); 
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
