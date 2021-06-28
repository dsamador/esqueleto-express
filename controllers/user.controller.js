const {response, request} = require('express')

const usuariosGet = (req= request,res = response)=>{

    const {q, nombre = 'Sin nombre', apikey, page, limit} = req.query

    res.json({                
        msg:'get API',
        q, nombre, apikey, page, limit
    })
}
const usuariosPost = (req,res = response)=>{
    
    const {nombre, edad} = req.body

    res.json({                
        msg:'post API',
        nombre, 
        edad
    })
}

const usuariosPut = (req,res = response)=>{
    
    const id = req.params.id
    
    //const {id} = req.params //podemos hacerlo de esta manera también

    res.json({                
        msg:'put API', 
        id
    })
}

const usuariosPatch = (req,res = response)=>{
    res.json({                
        msg:'patch API'
    })
}
const usuariosDelete = (req,res = response)=>{
    res.json({                
        msg:'delete API'
    })
}


module.exports = {
    usuariosGet, usuariosPatch, usuariosDelete, usuariosPost
    ,usuariosPut
}