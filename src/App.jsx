import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (title.trim().length === 0 || description.trim().length === 0) {
      alert("Title or Description cannot be empty");
      return;
    }

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const newPost = {
      id: Math.round(Math.random() * 100000), // Using random ID, you may consider using a better ID generation method
      title: title,
      description: description,
      createdAt: `${hours}:${minutes}`,
    };

    setPosts([...posts, newPost]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container bg-white p-5 shadow-lg">
      <div>
        <h1 className="text-primary mb-3 fw-semibold fs-3">Activities</h1>

        <div className="d-flex gap-3 mb-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your future activities"
            className="form form-control p-2"
          />
        </div>
        <textarea
          className="form form-control mb-3"
          placeholder="Enter post description"
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="btn btn-primary mg-3"
          onClick={addPost}
          placeholder="Enter post title"
        >
          Submit
        </button>
      </div>
      <div className="my-4">
        <ul className="list-group">
          {posts.length ? (
            posts.map((post) => (
              <li className="list-group-item mb-3" key={post.id}>
                <h3>{post.title}</h3>
                <p className="li-p">{post.description}</p>
                <small>{post.createdAt}</small>
              </li>
            ))
          ) : (
            <li className="list-group-item">No posts yet</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
