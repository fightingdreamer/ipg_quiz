// packages

import React, { createContext, useState } from 'react';

// types

export interface IUserContext {
  user: string;
  createUser: (name: string) => void;
}

// React Context API

const UserContext = createContext({} as IUserContext);

const UserProvider = (props) => {
  const [user, setUser] = useState('player#0001'); // default active user

  const createUser = (name: string) => {
    if (name.trim() === '') {
      setUser('user#0001');
    } else {
      setUser(name);
    }
  };

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
