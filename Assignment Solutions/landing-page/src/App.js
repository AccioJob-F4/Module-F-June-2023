import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };

    setPosts([...posts, newPost]);

    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <h1>Content Management System</h1>

      <form onSubmit={handlePostSubmit}>
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <button type="submit">Add Post</button>
        </div>
      </form>

      <h3>Posts</h3>

      {posts.map((post, index) => {
        return (
          <div className="post-card" key={index}>
            <div className="post-title">{post.title}</div>
            <div className="post-content">{post.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
