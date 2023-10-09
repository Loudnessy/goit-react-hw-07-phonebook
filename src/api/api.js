import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://6523d8c7ea560a22a4e8eca7.mockapi.io"
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
    return response.data;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  });
  export const addContact = createAsyncThunk("contacts/addContact", async (payload, thunkAPI) => {
    try { 
        await axios.post("/contacts", payload)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  });
  export const deleteContact = createAsyncThunk("contacts/deleteContact", async (payload, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${payload}`);
    return payload;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  });
  