import { onValue, ref, set } from 'firebase/database';

import { db } from '~/configs/database';

export const addForm = async (form: any) => {
  try {
    set(ref(db, 'forms/' + form.so), form);
  } catch (error) {
    console.error(error);
  }
};
