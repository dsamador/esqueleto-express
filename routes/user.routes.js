const {Router} = require('express')//Es una función
const  {
    usuariosGet,usuariosDelete,usuariosPut,usuariosPatch,usuariosPost
} = require('../controllers/user.controller')

const router = Router()

router.get('/', usuariosGet)//No se está ejecutando la función sino que se está haciendo una referencia
router.post('/', usuariosPost)

router.put('/:id', usuariosPut)

router.patch('/', usuariosPatch)
router.delete('/', usuariosDelete)



module.exports = router