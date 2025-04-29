import express from 'express';
import { createTodo, getTodo, getAllTodo, updateTodo, deleteTodo } from '../controllers/todoControllers.js';
import authenticateUser from '../middleware/authenticate.js';

const router = express.Router();

router.post('/add', authenticateUser, createTodo)
router.get('/', authenticateUser, getAllTodo);
router.get('/:id', authenticateUser, getTodo);
router.put('/:id', authenticateUser, updateTodo);
router.delete('/:id', authenticateUser,  deleteTodo);

export default router;