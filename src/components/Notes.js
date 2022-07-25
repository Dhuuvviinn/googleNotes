import React from 'react';
import './Notes.css';
import { MdDeleteOutline } from 'react-icons/md';
function Notes(props) {
  const Deletnote = () => {
    props.deleteN(props.id);
  };
  return (
    <div className='main_note'>
      <form>
        <input type='' name='' value={props.title} placeholder='Title' />
        <textarea
          rows='5'
          cols='7'
          value={props.content}
          placeholder='write a note...'
        ></textarea>
        <div className='btn'>
          <button type='button' onClick={Deletnote}>
            <MdDeleteOutline className='forsize' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Notes;
