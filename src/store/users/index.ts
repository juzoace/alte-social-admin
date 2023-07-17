import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const user = JSON.parse(localStorage.getItem("users"));

