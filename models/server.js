const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        
        //Middlewares
        this.middlewares()        

        //Rutas de la app
        this.routes()
    }
    middlewares(){
        //CORS
        this.app.use(cors())
        //lectura y parseo del body
        this.app.use(express.json())
        //Directorio público
        this.app.use(express.static('public'))
    }
    routes(){
        //middleware condicional
        this.app.use(this.usuariosPath, require('../routes/user.routes'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Corriendo en puerto ${this.port}`)
        })
    }
}

module.exports = Server