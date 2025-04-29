import Todo from "../models/todoModel.js";

const createTodo = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ success: false, message: "Title is Required", data: null })
        }
        const newTodo = await Todo.create({ title, userId: req.userId });

        return res.status(201).json({ success: true, data: { ...newTodo }, userId: req.userId, message: "Todo created successfully" });

    } catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong: ${error.message || error}`, data: null });
    }
};

const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId });  // Make sure the query filters by userId

        if (!todos || todos.length === 0) {
            return res.status(404).json({ success: false, message: "No todos found for this user", data: null });
        }

        return res.status(200).json({
            success: true,
            data: todos.map(todo => ({ ...todo.toObject(), userId: req.userId })),
            userId: req.userId,
            message: "Data Found"
        });
    } catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong: ${error.message || error}`, data: null });
    }
};


const getTodo = async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await Todo.findOne({ _id: id, userId: req.userId }); 
      if (!todo) {
        return res.status(404).json({ success: false, message: "Todo not found", data: null });
      }
      return res.status(200).json({ success: true, data: { ...todo.toObject() }, userId: req.userId, message: "Data Found" });
    } catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong: ${error.message || error}`, data: null });
    }
  };
  

const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { title } = req.body;

        const updateTodo = await Todo.findOneAndUpdate(
            { _id: id, userId: req.userId },
            { title },
            { new: true }
        );

        if (!updateTodo) {
            return res.status(404).json({ success: false, message: "Todo not found", data: null });
        }

        return res.status(200).json({ success: true, data: { ...updateTodo }, userId: req.userId, message: "Todo updated successfully" });


    } catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong: ${error.message || error}`, data: null });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteTodo = await Todo.findOneAndDelete({ _id: id, userId: req.userId });

        if (!deleteTodo) {
            return res.status(404).json({ success: false, message: "Todo not found", data: null });
        }
        return res.status(200).json({ success: true, message: "Todo deleted successfully" });
    } catch (e) {
        return res.status(500).json({ success: false, message: `Something went wrong: ${error.message || error}`, data: null });
    }
};

export { createTodo, getAllTodo, getTodo, updateTodo, deleteTodo };
