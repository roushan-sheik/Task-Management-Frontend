import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React from "react";
import auth from "./../../services/firebase";

export const authContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  //  create user with email and password
  function createUser(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login user
  function loginUser(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // login user with google
  const googleProvider = new GoogleAuthProvider();
  function signinWithGoogle() {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // logout user
  async function logoutUser() {
    setLoading(true);
    await signOut(auth);
    await axios.get("https://blog-api-a11.vercel.app/jwt/logout", {
      withCredentials: true,
    });
  }
  // update profile
  function updateUserProfile(name, photo) {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  }
  // on auth state changed get current login user
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // authentication user info data
  const userInfo = {
    user,
    createUser,
    loginUser,
    logoutUser,
    updateUserProfile,
    signinWithGoogle,
    setLoading,
    loading,
  };
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
