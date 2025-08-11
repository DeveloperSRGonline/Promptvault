const promptModel = require("../models/prompt.model");
const userModel = require("../models/user.model");

// Create the prompt
async function createPrompt(req, res) {
  const { title, promptText, tags } = req.body;

  const userId = req.user.id;

  const newPrompt = await promptModel.create({
    title,
    promptText,
    tags,
    user: userId,
  });

  res.status(201).json({
    message: "Prompt created successfully!",
    prompt: newPrompt,
  });
}

// Get all the prompts
async function getMyPrompts(req, res) {
  console.log(req.user.id);
  const prompts = await promptModel.find({
    user: req.user.id,
  });

  res.status(500).json({
    message: "Here are your prompts",
    prompts: prompts,
  });
}

// Get single prompt by ID
async function getPromptById(req, res) {
  const prompt = await promptModel.findOne({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!prompt)
    return res.status(404).json({
      message: "Prompt not found!",
    });

  res.json({
    message: "Here is your selected prompt",
    prompt,
  });
}

// Update a prompt
async function updatedPrompt(req, res) {
  const updatedPrompt = await promptModel.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user.id,
    },
    req.body,
    { new: true }
  );

  // prompt nahi mila toh
  if (!updatedPrompt) {
    return res.status(404).json({
      message: "Prompt not found!",
    });
  }

  // agar mila toh
  res.json({
    message: "Here is your updated prmpt!",
    updatedPrompt,
  });
}

// Delete a prompt
async function deletePrompt(req, res) {
  const deleted = await promptModel.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  if (!deleted) {
    return res.status(404).json({
      message: "Prompt not found",
    });
  }

  res.json({
    message: "Your selected prompt is deleted successfully!",
  });
}

module.exports = {
  createPrompt,
  getMyPrompts,
  getPromptById,
  updatedPrompt,
  deletePrompt,
};
