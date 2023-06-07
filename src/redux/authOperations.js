import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'user/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('user/login', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    token.unset();
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.authhorization.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
        const { data } = await axios.get('users/current');
        return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = { register, login, logout, refreshCurrentUser };

export default authOperations;