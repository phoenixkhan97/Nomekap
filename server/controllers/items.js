const {Item} = require('../models');



const getAllItem = async (req, res) => {
    try {
        const items = await Item.find()
        return res.status(200).json({ items })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const items = await Item.findById(id)
        if (items) {
            return res.status(200).json({ items });
        }
        return res.status(404).send('Does Not Exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.findByIdAndUpdate(id, req.body, { new: true }, (err, items) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!items) {
                res.status(500).send('Item not found!');
            }
            return res.status(200).json(items);
        })
    } catch (error) {
        return res.status(500).send(error.message);
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
    updateItem,
    deleteItem

}