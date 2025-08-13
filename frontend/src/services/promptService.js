import axios from "../api/axiosconfig";

const promptApi = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

// Get all prompts for the logged-in user
export const getMyPrompts = async () => {
  const { data } = await promptApi.get("/prompts/my-prompts", {
    withCredentials: true
  });
  return data;
};

// Create a new prompt
export const createPrompt = async (formData) => {
  const res = await promptApi.post("/prompts", formData);
  return res.data;
};

// Update a prompt
export const updatePrompt = async (id, formData) => {
  const res = await promptApi.put(`/prompts/${id}`, formData);
  return res.data;
};

// Delete a prompt
export const deletePrompt = async (id) => {
  const res = await promptApi.delete(`/prompts/${id}`);
  return res.data;
};
