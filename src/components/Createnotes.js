import React from 'react';
import './CreateNotes.css';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { useState } from 'react';

function Createnotes(props) {
  const [expand, setexpand] = useState(false);
  const [notes, setNotes] = useState({
    title: '',
    content: '',
  });
  const inputchange = (event) => {
    let { name, value } = event.target;

    setNotes((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passnote(notes);
    setNotes({
      title: '',
      content: '',
    });
  };

  return (
    <div
      className='main_notes'
      onDoubleClick={() => {
        setexpand(false);
      }}
    >
      <form>
        {expand ? (
          <input
            name='title'
            onChange={inputchange}
            value={notes.title}
            placeholder='Title'
          />
        ) : null}
        <textarea
          value={notes.content}
          name='content'
          rows='10'
          required
          onChange={inputchange}
          cols=''
          placeholder='write a note...'
          onClick={() => {
            setexpand(true);
          }}
        ></textarea>

        {expand ? (
          <div className='btn'>
            <button type='button'>
              <MdOutlineAddCircleOutline
                onClick={addEvent}
                className='forsize'
              />
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default Createnotes;
