import Axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nn1m1OT9XlDNbvPvpko6/books/';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOK,
  payload,
});

// eslint-disable-next-line consistent-return
export const sendBooksApi = (data) => async (dispatch) => {
  try {
    await Axios.post(apiUrl, data);
    dispatch(addBook(data));
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line consistent-return
export const loadBooksApi = () => async (dispatch) => {
  try {
    const { data } = await Axios.get(apiUrl);
    const Books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));
    const payload = Object.values(Books);
    dispatch(getBooks(payload));
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line consistent-return
export const removeBookApi = (payload) => async (dispatch) => {
  try {
    await Axios.delete(`${apiUrl}${payload}`);
    dispatch(removeBook(payload));
  } catch (error) {
    return error;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case GET_BOOK:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
