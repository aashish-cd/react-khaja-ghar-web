import React, { useState } from 'react';
import axios from 'axios';
import style from '../components/userList.module.scss';

const AddUser = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [totalMoney, setTotalMoney] = useState('');

  const handleSubmit = async () => {
    await axios.post('https://khaja-ghar-management.herokuapp.com/api/users', {
      name,
      phone,
      totalMoney,
    });
  };

  return (
    <div>
      <div>
        <label htmlFor='name'>Enter name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='phone'>Enter phone</label>
        <input
          type='text'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='totalMoney'>Enter totalMoney</label>
        <input
          type='number'
          name='totalMoney'
          value={totalMoney}
          onChange={(e) => setTotalMoney(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Add user</button>
      </div>
    </div>
  );
};

export default AddUser;
