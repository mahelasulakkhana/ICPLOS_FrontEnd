import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../config.json";
import { useNavigate } from "react-router-dom";

  
  export default function Home() {

    // const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const {data} = await axios.get(config.getAllProductsAPI);
        setProducts(data);
      };
      fetchProducts();
    }, []);

    
    // console.log(products)

    return (
      
      <div className="bg-white">
        <div className="text-4xl p-4 text-center">
            <span className="text-green-500">ICP</span>
            <span className="text-black ml-5">Lunch Ordering System</span>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> 
            {products.map((product) => (
            // <div onClick={() => navigate(`/order/${product.id}`)} >
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-green-500 border-2">
                  <img
                    src={product.pictureUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <h4 className="mt-4 text-sm text-gray-700">{product.description}</h4>
              </a>
            // </div>  
            ))}
          </div>
            {/* onClick={() => navigate(`/updatecoustomer/${users.id}`)} */}
          
        </div>
      </div>
    );
  }