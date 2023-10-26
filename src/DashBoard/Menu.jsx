import React from "react";


const products = [
    {
      id: 1,
      name: 'Rice & Curry Chicken',
      href: '#',
      price: 'Rs.480',
      imageSrc: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Rice & Curry Fish',
      href: '#',
      price: 'Rs.350',
      imageSrc: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Rice & Curry Egg',
      href: '#',
      price: 'Rs.890',
      imageSrc: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?auto=format&fit=crop&q=80&w=2766&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Rice & Curry Vegitable',
      href: '#',
      price: 'Rs.350',
      imageSrc: 'https://images.unsplash.com/photo-1512058556646-c4da40fba323?auto=format&fit=crop&q=80&w=2809&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Menu() {
    return (
      <div className="bg-white">
        {/* <div className="text-4xl p-4 text-center">
            <span className="text-green-500">ICP</span>
            <span className="text-black ml-5">Lunch Ordering System</span>
        </div> */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-green-500 border-2">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }