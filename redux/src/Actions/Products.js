import axios from 'axios';
const API = 'https://fakestoreapi.com/products';

export const GetData = () => {
  return async (dispatch) => {
    const res = await axios.get(API);
    const data = res.data;
    dispatch({
      type: 'GET DATA',
      payload: data,
    });
  };
};
