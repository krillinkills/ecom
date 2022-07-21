// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { combineReducers } from 'redux';
// import Products from './Products';
// const allReducers = combineReducers({ products: Products });

// const store = createStore(
//   allReducers,
//   composeWithDevTools(applyMiddleware(...thunkMiddleware))
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import Products from './Products';

const store = configureStore({
  reducer: {
    products: Products,
  },
});

export default store;
