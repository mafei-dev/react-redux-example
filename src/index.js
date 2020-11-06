import store from "./store";
import {BUG_ADDED, BUG_REMOVED} from "./acctionType";
import {addBug, bugResolved} from "./acctionCreator";

let unsubscribe = store.subscribe(() => {
    console.log("store changed ", store.getState())
});
store.dispatch(addBug("b1"));
store.dispatch(addBug("b2"));
store.dispatch(addBug("b3"));
store.dispatch(bugResolved(1));

console.log(store.getState());
