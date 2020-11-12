import axios from 'axios';
import {apiCallBegan, apiCallError, apiCallSuccess} from "../api";
import {addAll} from "../bugs";

const api = ({dispatch}) => next => async action => {
    if (action.type !== apiCallBegan.type) {
        return next(action);
    } else {

        const {url, method, onStart, onSuccess, onError} = action.payload;
        if (onStart) dispatch({type: onStart});
        next(action);
        try {
            const response = await axios.request({
                baseURL: "https://reqres.in/api/",
                url,
                method
            });
            // dispatch(addAll(response.data));
            console.log("onSuccess ", onSuccess);

            dispatch({type: apiCallSuccess.type, payload: response.data});
            dispatch({type: onSuccess, payload: response.data});

        } catch (e) {
            // dispatch(apiCallError(e));
            dispatch({type: onError, payload: e.message});
        }


    }
};
export default api;