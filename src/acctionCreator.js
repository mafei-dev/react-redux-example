import store from "./store";
import {BUG_ADDED, BUG_RESOLVED} from "./acctionType";

// export function addBug(dec) {
//     return {
//         type: BUG_ADDED,
//         payload: {
//             dec: dec
//         }
//     }
// }

export const addBug = (dec) => {
    return {
        type: BUG_ADDED,
        payload: {
            dec
        }
    }
};

export const bugResolved = (id) => {
    return {
        type: BUG_RESOLVED,
        payload: {
            id
        }
    }
};


