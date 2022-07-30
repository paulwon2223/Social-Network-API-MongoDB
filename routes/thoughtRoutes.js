const router = require("express").Router();
const { getThoughtById, getAllThoughts, createThought, updateThought, deleteThought} = require("../controllers/thoughtController");



router.get("/", getAllThoughts);

router.get("/:id", getThoughtById);

router.post("/", createThought);

router.put("/:id", updateThought);

router.delete("/:id", deleteThought);


module.exports = router;