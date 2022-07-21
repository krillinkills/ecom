import { GetData } from '../Actions/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch;
  useEffect(() => {
    if (!products) dispatch(GetData());
  }, []);
  return <h1>Products</h1>;
}

export default Products;
