import React, { createContext, useState ,useEffect } from 'react'
import app from '../firebase/Firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword, getAuth, signInWithPopup, onAuthStateChanged } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const { user, setUser } = useState(null);
    const [loading, setLoading] = useState(true);


    // create user
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // create user with google mail
    const signUpWithGmail = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    // user available or not

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    })
    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logOut
    }


    return (
      
        <AuthContext.Provider value={ authInfo } >
        {children}
        </AuthContext.Provider>
  )
}
export default AuthProvider