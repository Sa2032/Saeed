
import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Link, useParams } from 'react-router-dom';

const products = [
  { title: "Potato", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const ProductList = () => {
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title}
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Title: {product.title}</p>
      <p>Is Fruit: {product.isFruit ? 'Yes' : 'No'}</p>
      <p>Id: {id}</p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: 'product/:id',
    element: <ProductDetail />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;