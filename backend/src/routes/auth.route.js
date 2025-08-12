const express = require('express');
const { registerController, loginController, getMe, logoutUser } = require('../controllers/auth.controller');
const createPrompt = require('../controllers/prompt.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router()
router.use(authMiddleware)

router.post('/register',registerController)
router.post('/login',loginController)
router.get("/me", getMe);
router.post("/logout", logoutUser);

module.exports = router;    