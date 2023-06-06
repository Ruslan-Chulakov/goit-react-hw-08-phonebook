import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { persistedContactsReducer } from './contactsSlice';

import { persistedAuthReducer } from './authSlice';
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    authhorization: persistedAuthReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);



