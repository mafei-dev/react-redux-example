import {createSlice} from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        projectAdded: (bugs, action) => {
            bugs.push(
                {
                    id: ++lastId,
                    dec: action.payload.dec
                }
            );
        }
    }
});
export const {projectAdded} = slice.actions;
export default slice.reducer;