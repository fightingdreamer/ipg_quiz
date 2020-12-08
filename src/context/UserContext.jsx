// packages

import React, { createContext, useState } from 'react';

// React Context API

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState('user#0000'); // default active user

  const createUser = (name) => {
    if (name.trim() === '') {
      setUser('user#0001')
    } else {
      setUser(name);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        createUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

export { UserProvider };