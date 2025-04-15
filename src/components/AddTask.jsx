import { useState } from "react";
export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleChangeTask = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input type="Add task" value={text} onChange={handleChangeTask} />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
}
