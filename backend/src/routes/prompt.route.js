const express = require('express');
const {createPrompt,getMyPrompts, getPromptById, updatedPrompt, deletePrompt} = require('../controllers/prompt.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();
router.use(authMiddleware)

router.post('/', createPrompt);
router.get('/my-prompts', getMyPrompts);
router.get('/:id', getPromptById);
router.patch('/:id', updatedPrompt);
router.delete('/:id', deletePrompt);

module.exports = router;
