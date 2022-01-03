import React, { useState } from "react";

function CreateArea() {
  const [noteData, setNoteData] = useState({
    title: "",
    content: ""
  });

  return (
    <div>
      <form>
        <input name="title" placeholder="Title"
          onChange={event => {
            const { value } = event.target;
            setNoteData(prevNoteData => ({ ...prevNoteData, title: value }))
          }}
          value={noteData.title}
        />
        <textarea name="content" placeholder="Take a note..." rows="3"
          onChange={event => {
            const { value } = event.target;
            setNoteData(prevNoteData => ({ ...prevNoteData, content: value }))
          }}
          value={noteData.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
