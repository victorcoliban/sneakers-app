import React from 'react';
import '../App.css';
import products from '../assets/products.json';

function Main() {
    return (
        <div className="container container-position">
          <div className="row g-2">
            {products.map(product => (
              <div
                className="col-6 col-md-3"
                key={product.id}
                // onClick={() => navigateToProduct(product)}
              >
                <div className="card h-100 rounded-0 card-bottom">
                  <img
                    // src={getImageUrl(product.image, 500, 500)}
                    src={product.image}
                    loading="lazy"
                    className="card-img-top rounded-0 p-1 border-bottom bg-light"
                    alt={product.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="card-text flex-grow-1">
                      {product.style} • {product.colour}
                    </p>
                    <p className="cart-text mt-auto fw-bold mb-0">
                      {product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'EUR',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Main;
