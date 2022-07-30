const router = require("express").Router();
const { getSingleUser, getAllUsers, createUser, updateUser, deleteUser} = require("../controllers/thoughtController");



router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);


module.exports = router;
