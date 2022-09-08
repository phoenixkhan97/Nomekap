const { Router } = require('express')
const controllers = require('../controller/types')

const router = Router()


router.get('/items', controllers.getAllItem)

router.get('/items/:id', controllers.getItemById)


router.put('/items/:id', controllers.updateItem)

router.delete('/items/:id', controllers.deleteItem)



module.exports = router