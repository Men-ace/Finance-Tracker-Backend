import {
  adminFetchAllBookApi,
  fetchAllPunlicBookApi,
  fetchSinglePunlicBookApi,
  postNewBookApi,
} from "./bookAPI";
import { setBook, setPublicBooks, setSelectedBook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};

export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookApi();
  status === "success" && dispatch(setBook(payload));
};

export const fetchAllPublicBookAction = () => async (dispatch) => {
  const { status, payload } = await fetchAllPunlicBookApi();
  status === "success" && dispatch(setPublicBooks(payload));
};

export const fetchSinglePublicBookAction = (slug) => async (dispatch) => {
  const { status, payload } = await fetchSinglePunlicBookApi(slug);
  status === "success" && dispatch(setSelectedBook(payload));
};
