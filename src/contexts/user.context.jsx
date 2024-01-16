import { createContext, useState, useEffect } from "react";
import { creatUserDocumentFromAuth, onAuthStateChangedListner} from "../utils/firebase/firebase.util";

// as actual value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
  });

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
     const unsubscribe =   onAuthStateChangedListner((user) => {
        if(user){
            creatUserDocumentFromAuth(user);
        }
       setCurrentUser(user);
      })

     return unsubscribe;
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}