import { Router } from "express"
import items from "./api/items"

const router = Router()

// Using proper handler per service
router.use("/items", items)

export default router
