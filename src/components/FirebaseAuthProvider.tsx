import {
  Unsubscribe,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { createUserFromUID, fireAuth } from "../utils/firebase";
import { FirebaseError } from "firebase/app";

interface FirebaseAuthValue {
  user: User | undefined;
  Signup: Function;
  Login: Function;
}

const FirebaseAuthContext = createContext<FirebaseAuthValue>(null!);
export const useFirebaseAuth = () => useContext(FirebaseAuthContext);

export default function FirebaseAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<User>();

  const Signup = async (username: string, email: string, password: string) => {
    createUserWithEmailAndPassword(fireAuth, email, password)
      .then((userCredentials: UserCredential) => {
        if (userCredentials) {
          updateProfile(userCredentials.user, {
            displayName: username,
          });
          createUserFromUID(userCredentials.user.uid, {
            username: username,
          });
        } else {
          // no user found error message
        }
      })
      .catch((error: FirebaseError) => {
        console.log(error.code);
      });
  };

  const Login = async (email: string, password: string) => {
    signInWithEmailAndPassword(fireAuth, email, password)
      .then((userCredentials: UserCredential) => {
        if (userCredentials) console.log(userCredentials.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authContextValue: FirebaseAuthValue = {
    user: currentUser,
    Signup,
    Login,
  };

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe();
  }, []);

  return (
    <FirebaseAuthContext.Provider value={authContextValue}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
