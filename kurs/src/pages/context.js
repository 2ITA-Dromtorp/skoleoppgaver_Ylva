import React, { createContext, useState } from 'react';

const IsLoggedInContext = createContext({});
const IsLoggedInProvider = ({ children }) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    return (
        <IsLoggedInContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
            {children}
        </IsLoggedInContext.Provider>
    );
};
 
const UserNameContext = createContext({});
const UserNameProvider = ({ children }) => {
    const [userName, setuserName] = useState("");
    return (
        <UserNameContext.Provider value={{ userName, setuserName }}>
            {children}
        </UserNameContext.Provider>
    );
};

export { UserNameProvider, UserNameContext, IsLoggedInProvider, IsLoggedInContext };