import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <Header />
      <CreateArea
        onCreate={noteData => { setNotes(prevNotes => [...prevNotes, noteData]) }}
      />
      {notes.map((note, i) =>
        <Note
          key={i}
          title={note.title}
          content={note.content}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
