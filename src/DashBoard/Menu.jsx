import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";

  export default function Menu() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const {data} = await axios.get(config.getAllProductsAPI);
        setProducts(data);
      };
      fetchProducts();
    }, []);

    // console.log(products);

    return (
      <div>
      <div className="bg-white" >
        
        <div className="text-4xl p-4 mt-10 ml-10">
            <span className="text-green-500">MENU</span>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-green-500 border-2">
                  <img
                    src={product.pictureUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <p className="mt-1 text-lg font-medium text-gray-900">Rs.{product.price}</p>
                <h4 className="mt-4 text-sm text-gray-700">{product.name}</h4>
                <h4 className="mt-4 text-sm text-gray-700">{product.description}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
  }