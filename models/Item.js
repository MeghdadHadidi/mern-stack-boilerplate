import mongoose from "mongoose"

const Schema = mongoose.Schema

// Creating schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("item", ItemSchema)
