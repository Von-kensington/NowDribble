import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "@/firebaseConfig";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  async function login(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required.");
    }

    await signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        console.log("Login complete.");
      });
  }

  async function register(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required.");
    }

    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        console.log("Register complete.");
      });
  }

  async function logout() {
    await signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, authLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
