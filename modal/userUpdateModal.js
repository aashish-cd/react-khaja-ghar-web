import React, { useState, useEffect } from 'react';
import style from './userUpdateModal.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

const rate = {
  rice: 50,
  meat: 50,
  egg: 30,
};

const UserUpdateModal = ({ details, setShowModal, showModal }) => {
  const [totalToday, setTotalToday] = useState(0);
  const [rice, setRice] = useState(true);
  const [meat, setMeat] = useState(false);
  const [egg, setEgg] = useState(false);
  const [extra, setExtra] = useState(0);
  const { name, phone, id, totalMoney } = details;

  const updateData = async (money) => {
    await axios.put(
      `https://khaja-ghar-management.herokuapp.com/api/users/${id}`,
      { totalMoney: (totalMoney + money).toString() }
    );
  };

  const handleSubmit = () => {
    let total = 0;
    if (rice === true) {
      total += 50;
    }
    if (meat === true) {
      total += 50;
    }
    if (egg === true) {
      total += 50;
    }

    if (extra > 0) total += parseInt(extra);

    // await axios.put(
    //   `https://khaja-ghar-management.herokuapp.com/api/users/${id}`,
    //   { totalMoney: '100' }
    // );
    console.log(total);
    updateData(total);
  };
  return (
    <>
      <div
        className={style.container}
        onClick={() => setShowModal(false)}
      ></div>
      <>
        <AnimatePresence>
          <motion.div
            className={style.modalContainer}
            key={showModal}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, ease: 'easeIn' },
            }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <button className={style.btn} onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2>{name}</h2>
            <a href={`tel:${phone}`}>{phone} </a>
            <div>
              <input
                type='checkbox'
                checked={rice}
                onChange={(e) => setRice(!rice)}
              />
              <label htmlFor='bhat'>Rice</label>
            </div>
            <div>
              <input
                type='checkbox'
                checked={meat}
                onChange={(e) => setMeat(!meat)}
              />
              <label htmlFor='bhat'>Meat</label>
            </div>
            <div>
              <input
                type='checkbox'
                checked={egg}
                onChange={(e) => setEgg(!egg)}
              />
              <label htmlFor='bhat'>Egg</label>
            </div>
            <div>
              <input
                type='number'
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
              />
              <label htmlFor='extra'>Extra</label>
            </div>
            <div>
              <button onClick={handleSubmit}>Done</button>
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    </>
  );
};

export default UserUpdateModal;
