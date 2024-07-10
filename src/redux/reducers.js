// src/redux/reducers.js
import { BOOK_RIDE } from './actions';

const initialState = {
    booking: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_RIDE:
            return {
                ...state,
                booking: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;
