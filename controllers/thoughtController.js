const { Thoughts, User } = require("../models")


// ----------------- GET SINLGE THOUGHT ----------------- //
const getThoughtById = async (req, res) => {
    const { id } = req.params;

    try {
        const singleThought = await Thoughts.findById(id);
        res.status(200).json(singleThought)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- GET ALL THOUGHTS ----------------- //
const getAllThoughts = async (req, res) => {
    try {
        const allThoughts = await Thoughts.find();
        res.status(200).json(allThoughts)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- CREATE THOUGHT ----------------- //
const createThought = async (req, res) => {
    const { id } = req.params;

    try {
        const newThought = await Thoughts.create(req.body);
        await User.findByIdAndUpdate(id, {
            $push: {
                thoughts: newThought._id
            }
        });
        res.status(200).json(newThought)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- UPDATE THOUGHT ----------------- //
const updateThought = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedThought = await Thoughts.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedThought)
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};


// ----------------- DELETE THOUGHT ----------------- //
const deleteThought = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedThought = await Thoughts.findByIdAndDelete(id);
        res.status(202).json({ message: "Thought successfully deleted!" });
    } catch (err) {
        console.error(err);
        res.status(500).json(err)
    };
};



module.exports = {
    getThoughtById,
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought
};