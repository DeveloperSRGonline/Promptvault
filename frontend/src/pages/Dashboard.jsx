// src/pages/Dashboard.jsx
import React from "react";
import "../styles/dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>PromptVault</h2>
        <nav>
          <a href="#">🏠 Dashboard</a>
          <a href="#">📂 My Prompts</a>
          <a href="#">🌎 Community Vault</a>
          <a href="#">✏️ Create Prompt</a>
          <a href="#">📤 Export</a>
          <a href="#">⚙️ Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Navbar */}
        <header className="topbar">
          <input type="text" placeholder="Search prompts..." />
          <div className="profile">
            <img src="/avatar.png" alt="user" />
          </div>
        </header>

        {/* Welcome */}
        <section className="welcome">
          <h1>Welcome back, Shivam 👋</h1>
          <div className="quick-actions">
            <button>+ New Prompt</button>
            <button>Import</button>
            <button>Export</button>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="stat-card">Total Prompts: 24</div>
          <div className="stat-card">Community Prompts: 58</div>
          <div className="stat-card">Tags: 14</div>
          <div className="stat-card">Exports: 5</div>
        </section>

        {/* Prompt List */}
        <section className="prompt-list">
          <h2>Recent Prompts</h2>
          <div className="prompt-card">
            <h3>Blog Outline Generator</h3>
            <p>Tags: Content, Writing</p>
            <span>📅 Aug 13, 2025</span>
          </div>
          <div className="prompt-card">
            <h3>Social Media Caption Wizard</h3>
            <p>Tags: Marketing, Creative</p>
            <span>📅 Aug 12, 2025</span>
          </div>
        </section>
      </main>
    </div>
  );
}
