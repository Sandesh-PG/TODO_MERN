import express from 'express';
import { createTodo, getTodo, getAllTodo, updateTodo, deleteTodo } from '../controllers/todoControllers.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/add', authenticate, createTodo)
router.get('/', authenticate, getAllTodo);
router.get('/:id', authenticate, getTodo);
router.put('/:id', authenticate, updateTodo);
router.delete('/:id', authenticate,  deleteTodo);

export default router;