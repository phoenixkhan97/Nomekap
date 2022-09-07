const { Router } = require('express')
const controllers = require('../controller/items')

const router = Router()

router.get('/', (req, res) => 
res.send("Item"))

router.get('/item', controllers.getAllItem)

router.get('/item/:id', controllers.getItemById)

router.put('/item/:id', controllers.updateItem)

router.delete('/item/:id', controllers.deleteItem)



module.exports = router