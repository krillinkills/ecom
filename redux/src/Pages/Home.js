import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      Links-ecommerce
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Home;
