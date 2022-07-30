const { Thoughts, User } = require("../models");


// ----------------- GET SINLGE USER ----------------- //
const getSingleUser = async (req, res) => {
    const { id } = req.params;

    try {
        const singleUser = await User.findById(id);
        res.status(200).json(singleUser)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- GET ALL USERS ----------------- //
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- CREATE USER ----------------- //
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({ message: "User created!"}, newUser)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- UPDATE USER ----------------- //
const updateUser = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "User updated!"}, updatedUser)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- DELETE USER ----------------- //
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(202).json({ message: "User successfully deleted!" });
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};



module.exports = {
    getSingleUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};