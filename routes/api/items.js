import { Router } from "express"
const routes = Router()

// Items model
import Item from "../../models/Item"

// @route   GET api/items
// @desc    GET All Items
// @access  Public
routes.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// @route   POST api/items
// @desc    Create an item
// @access  Public
routes.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err))
})

// @route   DELETE api/items/:id
// @desc    Deletes an item
// @access  Public
routes.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.remove().then(() => res.json({ success: true }))
        })
        .catch(() =>
            res.status(404).json({
                success: false,
                data: "Can not find Item by provided ID"
            })
        )
})

export default routes
