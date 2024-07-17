import { useState } from "react";

export const CreateToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>{" "}
      <br></br>
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>{" "}
      <br></br>
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("todo created");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};
