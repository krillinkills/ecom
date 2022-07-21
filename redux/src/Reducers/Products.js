const products = (state = false, action) => {
  switch (action.type) {
    case 'GET DATA':
      return action.payload;
    default:
      return state;
  }
};

export default products;
