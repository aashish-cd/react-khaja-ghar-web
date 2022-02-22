import React, { useState } from 'react';
import axios from 'axios';
import style from '../styles/dl-help.module.scss';

const DLhelp = () => {
  //title, date, body:{Ntitle, Nbody}, issuer
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [Ntitle, setNtitle] = useState('');
  const [Nbody, setNbody] = useState('');
  const [issuer, setIssuer] = useState('');

  const handleSubmit = async () => {
    await axios.post('https://dl-help.herokuapp.com/api/dl-help', {
      title,
      date,
      body: { Ntitle, Nbody },
      issuer,
    });
  };

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <label htmlFor='title'>Enter title</label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='date'>Enter date</label>
        <input
          type='text'
          name='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='Ntitle'>Enter Ntitle</label>
        <input
          type='text'
          name='Ntitle'
          id='Ntitle'
          value={Ntitle}
          onChange={(e) => setNtitle(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='Nbody'>Enter Nbody</label>
        <input
          type='text'
          name='Nbody'
          id='Nbody'
          value={Nbody}
          onChange={(e) => setNbody(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='issuer'>Enter issuer</label>
        <input
          type='text'
          name='issuer'
          id='issuer'
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
        />
      </div>

      <div className={style.buttonContainer}>
        <button onClick={handleSubmit}>Add user</button>
      </div>
    </div>
  );
};

export default DLhelp;
