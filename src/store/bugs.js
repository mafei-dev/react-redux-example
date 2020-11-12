import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';

import {default as actions, apiCallBegan, apiCallError} from "./api";

let lastId = 0;
const slice = createSlice({
    name: "bugs",
    initialState: {
        data: [
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
            }
        ],
        loading: false,
        lastFetch: null
    },
    reducers: {
        bugLoaded: (bugs, action) => {
            bugs.loading = true;
        },
        bugLoadedFailed: (bugs, action) => {
            bugs.loading = false;
        },
        bugAssignToUser: (bugs, action) => {
            const {bugId, userId} = action.payload;
            const index = bugs.data.findIndex(bug => bug.id === bugId);
            bugs.data[index].userId = userId;
        },
        bugAdded: (state, action) => {
            console.log("payload ", action.payload);
            state.data.push(
                {
                    id: ++lastId,
                    dec: action.payload.dec
                }
            );
            console.log("after bugs ", state.data.length);
        },
        addAll: (bugs, action) => {
            // console.log("bugs ", bugs);
            bugs.data = action.payload.data;
            bugs.loading = false;
            // console.log("new bugs list ", action.payload);
        },
        bugResolved: (bugs, action) => {
            alert(JSON.stringify(bugs));
            const index = bugs.data.findIndex(bug => {
                return bug.id === action.payload.id
            });
            bugs.data[index].resolved = true;
        }
    }
});
const {bugAdded, bugResolved, bugAssignToUser, addAll, bugLoaded, bugLoadedFailed} = slice.actions;
export default slice.reducer;
//selectors
/*
export const getUnresolvedBug = state => {
    return state.entities.bugs.filter(bug => {
        return !bug.resolved;
    });
};
*/

//actions creators
export const loadBugs = () => apiCallBegan({
    url: "/users?page=2",
    method: "get",
    onStart: bugLoaded.type,
    onSuccess: addAll().type,
    onError: bugLoadedFailed.type,
});
export const addBug = bug => apiCallBegan({
    url: "users",
    method: "POST",
    data: bug,
    onSuccess: bugAdded().type,
    onError: bugLoadedFailed.type,
});


//--------------
export const getUnresolvedBug = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);

export const getBugsBuyUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
);

