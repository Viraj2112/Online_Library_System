import { createSlice } from "@reduxjs/toolkit";
import data from "./dummyData";

const librarySlice = createSlice(
    {
        name: 'library',
        initialState: {
            books: data,    //here data is the list of books
            prevId: 51,     // here the last Id used is Stored.
        },
        reducers: {
            addBook: (state, action) => {
                state.books.push(action.payload)    // Function to Add Book
            },
            incrementId: (state, action) => {
                state.prevId = state.prevId + 1;    // Function to Increment the Id on Each Submission.
            }
        }
    }
);

export const {addBook, incrementId} = librarySlice.actions; // Exporting reducer and actions seperately.
export default librarySlice.reducer;