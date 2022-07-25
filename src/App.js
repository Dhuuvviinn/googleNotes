// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Createnotes from './components/Createnotes';
import Notes from './components/Notes';
import { useState } from 'react';
function App() {
  const [notesitem, setNotesitems] = useState([]);
  const addNote = (notes) => {
    setNotesitems((predata) => {
      return [...predata, notes];
    });
    // console.log(notes);
  };
  const dDnotes = (id) => {
    setNotesitems((olddata) => {
      return olddata.filter((currE, index) => {
        console.log(currE, index);
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <Createnotes passnote={addNote} />
      {/* <Notes /> */}
      <div className='forflex'>
        {notesitem.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteN={dDnotes}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
