import { useEffect, useState } from "react";
import { getMyPrompts, createPrompt, deletePrompt } from "../services/promptService";
import "../styles/dashboard.scss";

export default function Dashboard() {
  const [prompts, setPrompts] = useState([]);
  const [form, setForm] = useState({ title: "", promptText: "", tags: "" });

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    try {
      const data = await getMyPrompts();
      setPrompts(data.prompts || []);
    } catch (error) {
      alert("Failed to load prompts");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const newPrompt = await createPrompt({
        ...form,
        tags: form.tags.split(",").map((t) => t.trim()),
      });
      setPrompts([...prompts, newPrompt.prompt]);
      setForm({ title: "", promptText: "", tags: "" });
    } catch (error) {
      alert("Failed to create prompt");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this prompt?")) return;
    try {
      await deletePrompt(id);
      setPrompts(prompts.filter((p) => p._id !== id));
    } catch (error) {
      alert("Failed to delete prompt");
    }
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">My Prompts</h2>

      {/* Create Prompt Form */}
      <form onSubmit={handleCreate} className="prompt-form">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          name="promptText"
          placeholder="Prompt text"
          value={form.promptText}
          onChange={(e) => setForm({ ...form, promptText: e.target.value })}
          required
        />
        <input
          name="tags"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        />
        <button type="submit">Add Prompt</button>
      </form>

      {/* Prompts List */}
      <div className="prompts-list">
        {prompts.length > 0 ? (
          prompts.map((p) => (
            <div key={p._id} className="prompt-card">
              <div className="prompt-header">
                <h3>{p.title}</h3>
                <button className="delete-btn" onClick={() => handleDelete(p._id)}>✕</button>
              </div>
              <p className="prompt-text">{p.promptText}</p>
              {p.tags?.length > 0 && (
                <div className="tags">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-prompts">No prompts yet. Create one above!</p>
        )}
      </div>
    </div>
  );
}
