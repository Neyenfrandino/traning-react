import React, { useState, useEffect } from 'react';

let URL = 'https://jsonplaceholder.typicode.com/users'

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL).then((response) => response.json())
    .then((data) => {
      setUsers(data);
    });
  }, []);

  return { users };
};

export default useFetchUsers;
