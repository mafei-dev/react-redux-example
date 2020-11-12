const toast = store => next => action => {
    if (action.type === 'error') {
        console.log("Tastily ", action.payload);
    } else {
        console.log("no errors");
        next(action);
    }
};

export default toast;