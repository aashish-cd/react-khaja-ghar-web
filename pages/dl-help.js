import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../styles/dl-help.module.scss';
import { Watch } from 'react-loader-spinner';

const DLhelp = () => {
  //title, date, body:{Ntitle, Nbody}, issuer
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [Ntitle, setNtitle] = useState('');
  const [Nbody, setNbody] = useState('');
  const [issuer, setIssuer] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post('https://dl-help.herokuapp.com/api/dl-help', {
        title,
        date,
        body: { Ntitle, Nbody },
        issuer,
      })
      .catch((err) => setAlert(true));
    setTitle('');
    setDate('');
    setNtitle('');
    setNbody('');
    setIssuer('');

    setLoading(false);
    setTimeout(() => {
      setAlert(false);
    }, 1500);
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
        <button onClick={handleSubmit}>
          {loading ? 'Adding...' : 'Add user'}
        </button>
      </div>
      {alert && <p>Error found, please fill valid input in all fields</p>}
      {loading && <Watch color='#000' height={80} width={80} />}
    </div>
  );
};

export default DLhelp;
