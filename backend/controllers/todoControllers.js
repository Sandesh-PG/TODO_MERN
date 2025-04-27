import Todo from "../models/todoModel.js";

const createTodo = async(req, res) => {
   try{
    const {title} = req.body;

    if(!title){
        return res.status(400).json({success: false, message: "Title is Required", data: null})
    }
    const newTodo = await Todo.create({ title });
    
   return res.status(201).json({ success: true, data:{...newTodo}, message: "Todo created successfully"});

   }catch(e){
        res.status(500).json({ message: `Something went wrong ${e}`});
   }
};

const getAllTodo = async(req, res) => {
    try{
        const todo = await Todo.find();
       return res.status(200).json({success: true, data: todo, message: "Data Found"});
                
    }catch(e){
         res.status(500).json({success: false, message: `Something went wrong ${e}`, data: null});
    }
};

const getTodo = async(req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({success: false, message: "Todo not found", data: null});
        }
       return res.status(200).json({success: true, data: {...todo}, message: "Data Found"});
                
    }catch(e){
         res.status(500).json({ message: `Something went wrong ${e}`});
    }
};

const updateTodo = async(req, res) => {
    try{
        const id = req.params.id;
        const { title } = req.body;

        const updateTodo = await Todo.findByIdAndUpdate(
            id, 
            {title},
            {new: true}
        );

        if(!updateTodo){
            return res.status(404).json({success: false, message: "Todo not found", data: null});
        }

       return res.status(200).json({success: true, data: {...updateTodo}, message: "Todo updated successfully" });

        
    }catch(e){
         res.status(500).json({success: false,  message: `Something went wrong ${e}`, data: null});
    }
};

const deleteTodo = async (req, res) => {
    try{
        const id = req.params.id;
        const deleteTodo = await Todo.findByIdAndDelete(id);

        if(!deleteTodo){
            return res.status(404).json({success: false, message: "Todo not found", data: null});
        }
        return res.status(200).json({success: true, message: "Todo deleted successfully"});
    }catch(e){
         res.status(500).json({success: false,  message: `Something went wrong ${e}`, data: null});
    }
};

export { createTodo, getAllTodo, getTodo, updateTodo, deleteTodo };
