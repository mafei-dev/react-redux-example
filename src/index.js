import configureAppStore from "./store/configureAppStore";
import {
    bugResolved,
    bugAdded,
    bugAssignToUser,
    addAll,
    getBugsBuyUser,
    getUnresolvedBug,
    loadBugs,
    addBug
} from "./store/bugs";
import {addUser} from "./store/users";
import * as actions from "./store/api";

const store = configureAppStore();

/*
store.dispatch(
    bugAdded({
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    }));
*/

/*store.dispatch(bugAdded({dec: "test1"}));
store.dispatch(addAll([{dec: "test new 1"}, {dec: "test new 2"}]));*/
store.dispatch(
    loadBugs()
);

store.dispatch(
    addBug({
        dec: "kalhara@gamil.com"
    })
);

// store.dispatch(bugAdded({dec: "test1"}));
/*store.dispatch({
    type: "error",
    payload: {
        message: "Test error"
    }
});*/

/*
store.dispatch((dispatch, getState) => {
    dispatch({type: "bugResolved", bugs: [1, 2, 3]});
    dispatch({type: "bugResolved", bugs: [1, 2, 5]});
    console.log(getState());
});

*/

