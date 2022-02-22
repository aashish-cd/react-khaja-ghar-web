import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserUpdateModal from '../modal/userUpdateModal';
import style from './userList.module.scss';
import { motion } from 'framer-motion';

const UserList = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const fetchData = async () => {
    const response = await axios.get(
      'https://khaja-ghar-management.herokuapp.com/api/users'
    );
    setUserDetails(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(userDetails);

  const handleModal = (name, phone, totalMoney, id) => {
    setShowModal(!showModal);
    setCurrentUser({ name, phone, totalMoney, id });
    console.log(currentUser);
  };

  return (
    <>
      <motion.div
        className={style.userContainer}
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } }}
      >
        <table>
          <tr>
            <th>name</th>
            <th>phone</th>
            <th>total</th>
          </tr>
          {userDetails.map((ss, index) => {
            return (
              <tr
                key={index}
                onClick={() =>
                  handleModal(ss.name, ss.phone, ss.totalMoney, ss._id)
                }
              >
                <td>{ss.name}</td>
                <td>{ss.phone}</td>
                <td>{ss.totalMoney}</td>
              </tr>
            );
          })}
        </table>
        <p style={{ position: 'relative', right: '20px' }}>
          Grant total to be received :{' '}
          {userDetails.length > 0 &&
            userDetails
              .map((ss) => ss.totalMoney)
              .reduce((acc, cv) => acc + cv)}
        </p>
      </motion.div>
      {showModal && (
        <UserUpdateModal
          details={currentUser}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};
export default UserList;
