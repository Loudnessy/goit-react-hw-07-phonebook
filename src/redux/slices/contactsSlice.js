import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts } from "api/api";
import { deleteContact } from "api/api";
const handlePending = state => {
  state.error = false
state.isLoading = true
};
const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = true
};
const contactsSlice = createSlice({
    
    name: "contacts",
    // Початковий стан редюсера слайсу
    initialState: {
      items: [],
      isLoading: false,
      error: null
    },
    // Об'єкт редюсерів
    extraReducers: {
    [fetchContacts.pending]: handlePending,
[addContact.pending]: handlePending,
[deleteContact.pending]: handlePending,
[fetchContacts.rejected]: handleRejected,
[deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false
      state.items = action.payload
          },
[addContact.fulfilled](state, action) {
  state.isLoading = false
  if (state.items.length > 0) {
          state.items.find(contact => contact.name.toUpperCase() === action.payload.name.toUpperCase()) 
          ? alert(`${action.payload.name} is already in contacts`) 
          : state.items = [...state.items, action.payload]
      }
      else {
          state.items = [...state.items, action.payload]
      }
      },
      
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false
        const newObj = state.items.filter(contact => contact.id !== action.payload)
        console.log(JSON.stringify(newObj));
        state.items = newObj
            },
            
    },
  });
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;