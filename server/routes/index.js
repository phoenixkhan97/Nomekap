const { Router } = require('express')
const controllers = require('../controller/types')

const router = Router()


router.get('/items', controllers.getAllItem)

router.get('/:items_id', controllers.getItemById)

router.post('/:items_id', controllers.createItem)

router.put('/:items_id', controllers.updateItem)

router.delete('/:items_id', controllers.deleteItem)



module.exports = router