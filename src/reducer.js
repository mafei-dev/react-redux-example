// []

import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from "./acctionType";

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_ADDED:
            return [...state,
                {
                    id: ++lastId,
                    dec: action.payload.dec
                }
            ];
        case BUG_REMOVED :
            return state.filter(bug => bug.id !== action.payload.id);
        case BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, isResolved: true});
        default:
            return state;
    }
}