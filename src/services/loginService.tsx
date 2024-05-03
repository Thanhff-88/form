import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { Navigate } from 'react-router-dom';
import config from '~/configs';

import { auth, db } from '~/configs/database';

const provider = new GoogleAuthProvider();

export const login = () => signInWithPopup(auth, provider);

export const logout = async () => {
  await signOut(auth);
  <Navigate to={config.routes.home} />;
  localStorage.clear();
};

export const addUser = async (currentUser: any) => {
  try {
    set(ref(db, 'users/' + currentUser.uid), {
      uid: currentUser.uid,
      displayName: currentUser.displayName,
      email: currentUser.email,
      photoURL: currentUser.photoURL,
    });
  } catch (error) {
    console.error(error);
  }
};
