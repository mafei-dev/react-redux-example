import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
import toast from "./middleware/errorToast";
import api from "./middleware/api";

export default function configureAppStore() {
    return configureStore(
        {
            reducer: reducer,
            middleware: [
                ...getDefaultMiddleware(),
                logger(
                    {
                        des: "logger"
                    }
                ),
                toast,
                api
            ]
        }
    );
};