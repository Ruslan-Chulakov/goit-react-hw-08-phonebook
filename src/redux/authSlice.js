import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    name: 'Incognito',
    email: '',
  },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder)=>{
    // register
    builder
      .addCase(authOperations.register.pending, (state, action) => {
      return state;
      })
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.data;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
         state.isLoggedIn = false;
      return state;
      })
      // login
      .addCase(authOperations.login.pending, (state, action) => {
        return state;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      })
      .addCase(authOperations.login.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      // logout
      .addCase(authOperations.logout.pending, (state, action) => {
        return state;
      })
      .addCase(authOperations.logout.fulfilled, (state, action) => {
        state.user = {
        name: 'Incognito',
        email: '',
      };
      state.token = '';
      state.isLoggedIn = false;
      })
      .addCase(authOperations.logout.rejected, (state, action) => {
        return state
      })
      // refreshCurrentUser
      .addCase(authOperations.refreshCurrentUser.pending, (state, action) => {
        return state
      })
      .addCase(authOperations.refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
          state.isLoggedIn = true;
      })
      .addCase(authOperations.refreshCurrentUser.rejected, (state, action) => {
        return state
      })
    // [authOperations.register.pending](state, action) {
    //   console.log('register pending');
    //   return state;
    // },
    // [authOperations.register.fulfilled](state, action) {
    //   console.log('register fullfiled action.payload: ', action.payload);
    //   state.user = action.payload.data;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [authOperations.register.rejected](state, action) {
    //   console.log('register error');
    //   state.isLoggedIn = false;
    //   return state;
    // },
    // login
    // [authOperations.login.pending](state, action) {
    //   return state;
    // },
    // [authOperations.login.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [authOperations.login.rejected](state, action) {
    //   state.isLoggedIn = false;
    // },
    //   logout
    // [authOperations.logout.pending](state, action) {
    //   return state;
    // },
    // [authOperations.logout.fulfilled](state, action) {
    //   state.user = {
    //     name: 'Incognito',
    //     email: '',
    //   };
    //   state.token = '';
    //   state.isLoggedIn = false;
    // },
    // [authOperations.logout.rejected](state, action) {
    //   return state
    //   },
    // refreshCurrentUser
      // [authOperations.refreshCurrentUser.pending](state, action) {
      //   return state
      // },
      // [authOperations.refreshCurrentUser.fulfilled](state, action) {
      //     state.user = action.payload;
      //     state.isLoggedIn = true;
      // },
      // [authOperations.refreshCurrentUser.rejected](state, action) {
      //     return state;
      // }
  },
});

const persistConfig = {
  key: 'token',
    storage,
  whitelist: ['token']
};

export const authReducer = userSlice.reducer;
export const persistedAuthReducer = persistReducer(persistConfig, authReducer)
