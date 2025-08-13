const express = require('express');
const { registerController, loginController, getMe, logoutUser } = require('../controllers/auth.controller');
const createPrompt = require('../controllers/prompt.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router()

router.post('/register',registerController)
router.post('/login',authMiddleware,loginController)
router.get("/me",authMiddleware, getMe);
router.post("/logout",authMiddleware, logoutUser);

module.exports = router;    