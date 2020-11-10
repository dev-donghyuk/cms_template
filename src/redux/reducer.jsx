import { tempTableData } from "../data";

const data = {
  isLoading: false,
  isLogin: true,
  modalOverflow: false,
  tempTableData: tempTableData,
};
export default (state = data, { type, payload }) => {
  switch (type) {
    case "SET_IS_LOGIN":
      return { ...state, isLogin: payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: payload };
    case "SET_MODAL_OVERFLOW":
      return { ...state, modalOverflow: payload };

    default:
      return state;
  }
};
