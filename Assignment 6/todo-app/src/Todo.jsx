import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();

    const text = task.trim();

    // Blank task add nahi hogi
    if (text === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      text: text
    };

    // Task add karo aur A–Z order mein sort karo
    setTasks((previousTasks) =>
      [...previousTasks, newTask].sort((a, b) =>
        a.text.localeCompare(b.text, "en", {
          sensitivity: "base",
          numeric: true
        })
      )
    );

    // Input clear karo
    setTask("");
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((item) => item.id !== id)
    );
  }

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter a task"
          aria-label="New task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button type="submit" disabled={task.trim() === ""}>
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((item) => (
            <li key={item.id}>
              {item.text}{" "}
              <button
                type="button"
                onClick={() => deleteTask(item.id)}
                aria-label={`Delete ${item.text}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;