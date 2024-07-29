
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, setDoc, updateDoc, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcUOs7Dd3M2KRNIXpCf4DGuM4RdEqihg",
  authDomain: "netflix-clone-c72fd.firebaseapp.com",
  projectId: "netflix-clone-c72fd",
  storageBucket: "netflix-clone-c72fd.appspot.com",
  messagingSenderId: "446915939749",
  appId: "1:446915939749:web:01c13e2d1d9f9b96036c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password, accountType = 'primary') => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    if (accountType === 'primary') {
      await setDoc(doc(db, 'users', email), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        subAccounts: [],
        favorites: []
      });
    } else {
      const userDocRef = doc(db, 'users', email);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const subAccounts = userData.subAccounts || [];

        if (subAccounts.length < 3) {
          subAccounts.push({
            uid: user.uid,
            name,
            email: `${email}+${subAccounts.length + 1}`
          });

          await updateDoc(userDocRef, { subAccounts });
        } else {
          throw new Error('Maximum sub-accounts reached');
        }
      } else {
        throw new Error('Primary account does not exist');
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

const saveFavorites = async (uid, favorites) => {
  try {
    await setDoc(doc(db, 'favorites', uid), { movies: favorites });
  } catch (error) {
    console.error("Error saving favorites: ", error);
  }
};

const loadFavorites = async (uid) => {
  try {
    const docRef = doc(db, 'favorites', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().movies;
    }
    return [];
  } catch (error) {
    console.error("Error loading favorites: ", error);
    return [];
  }
};

export { auth, db, login, signup, logout, saveFavorites, loadFavorites };
