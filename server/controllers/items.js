const {Item} = require('../models');



const getAllItem = async (req, res) => {
    try {
        const items = await Item.findAll()
        return res.send({ items })
    } catch (error) {
        throw error;
    }
}

const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const items = await Item.findById(id)
        if (items) {
            return res.send({ items });
        }
    } catch (error) {
        throw error
    }
}

const createItem = async(req,res) =>{
    try{
        let itemId = parseInt(req.params.item_id)
        let createBody = {
            itemId, ...req.body
        }
        let create = await Item.create(createBody)
        res.send(create)
    }catch(error){
        throw error
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.findByIdAndUpdate(id, req.body, { new: true }, (err, items) => {
            if (err) {
                res.send(err);
            }
            if (!items) {
                res.send('Item not found!');
            }
        })
    } catch (error) {
        throw error
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Item.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Item deleted");
        }
        throw new Error("Item not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getAllItem,
    getItemById,
    createItem,
    updateItem,
    deleteItem

}