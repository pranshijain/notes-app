import React from "react";
import "./App.css";
import { TrashIcon, PlusIcon } from '@heroicons/react/24/solid'
// import note from './Note'

function App() {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  function add() {
    setNotes((prevNote) =>  [...prevNote, ``]);
  }

  // notes  [{note: 'pranshu', date: 'yz'}, {note: '', date: ''}, {note: 'hello', date:'22/11/23'}]
  function handleChange(event, i) {
    setNotes((prevNotes) => {
      prevNotes[i] = event.target.value;

      return [...prevNotes];
    });
  }
  // const handleDateChange = (event, i) => {
  //   setNotes((prevNotes) => {
  //     prevNotes[i].date = event.target.value;
  //     return[...prevNotes];
  //   });
  // };

  function handleDelete(i) {
    console.log("i is: ", i);
    const isConfirm = window.confirm("Are you sure to delete?");

    if (isConfirm) {
      setNotes(
        notes.filter((note, idx) => {
          return idx !== i;
        })
      );
    } else {
      console.log("Delete operation cancelled");
    }
  }

  return (
    <div className="main_border">
      <div className="titleCircle">
        <h1 className="title">NOTES✎</h1>
        <div className="circle"></div>
      </div>

      <h3 className="add" onClick={add}>
        {" "}
        Add 
        <PlusIcon width={20} height={20} />
        {" "}
      </h3>
      <ul className="mainBox">
        {notes.map((note, i) => {
          console.log("hello");
          return (
            <li className="container" key={i}>
              <p className="notebook">📝</p>
              <input
                className="input"
                value={note}
                onChange={(event) => handleChange(event, i)}
                placeholder={"Enter Note here"}
              />
              {/* <input
                className="noteDate"
                type="date"
                value={note.date}
                onChange={(event) => handleDateChange(event, i)}
              /> */}

              <button className="delete" onClick={() => handleDelete(i)}>
                <TrashIcon width={24} height={24} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
