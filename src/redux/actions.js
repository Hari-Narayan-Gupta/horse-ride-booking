// src/redux/actions.js
export const BOOK_RIDE = 'BOOK_RIDE';

export const bookRide = (bookingDetails) => ({
    type: BOOK_RIDE,
    payload: bookingDetails
});
