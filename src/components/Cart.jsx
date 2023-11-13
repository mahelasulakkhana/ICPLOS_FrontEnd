import React from "react";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';


const TABLE_HEAD = ["Name", "Price", "Quentity","Created At" ,"Edite", "Delete"];


export function Cart() {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const cookie = Cookies.get('order'); // Retrieve all cookies
    // console.log(cookie);

    if (cookie) {
      const parsedCookie = JSON.parse(cookie);
      // Now, parsedCookie will hold the JavaScript object
      // console.log(parsedCookie);
      setCartItems(parsedCookie);
    }

  }, []);

  console.log(cartItems);

  return (
    <div className="bg-gray">
      <div className="flex items-center justify-center mt-20 ">

        <Card className="rounded-md border border-blue-gray-200  border-2 border border-green-500 border-2">
          <CardBody className=" ">
            <table className="mt-4  min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  return (
                    <tr key={item.product.name}>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center">

                          <div className="flex flex-col items-center justify-center">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.product.name}
                            </Typography>

                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            Rs. {item.product.price}
                          </Typography>

                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col items-center justify-center">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {item.quantity}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {item.createdAt}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Tooltip content="Edite Order">
                          <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Edite</button>
                        </Tooltip>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Tooltip content="Delete Order items-center justify-center">
                          <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}