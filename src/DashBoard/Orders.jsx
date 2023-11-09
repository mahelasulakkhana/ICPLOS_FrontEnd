import React from 'react'
import {
  Card,
  Typography,
  CardBody,
  Tooltip,
} from "@material-tailwind/react";
import Sidebar from "./Shared/Sidebar";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import config from "../config.json";

const TABLE_HEAD = ["Product Name", "Quentity", "Price", "Order Data", "Customer Name", "Delete"];

export default function Orders() {

  const [orders, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await axios.get(config.getallOrdersAPI);
      setOrder(data);
    };
    fetchOrder();
  }, []);

  handleRemove = orders => {
    const url = `https://localhost:7184/api/Order/${orders.id}`; //

    axios
      .delete(url)
      .then(res => {
        this.setState(previousState => {
          return {
            orders: previousState.orders.filter(m => m.id !== order.id)
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // console.log(orders);

  return (
    <div className="flex ">
      <Sidebar />
      <div className="items-center justify-center p-10 mt-20 ml-20 ">
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
                {orders.map((order) => {
                  return (
                    <tr key={order.id}>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              className="font-normal"
                            >
                              {order.name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              className="font-normal opacity-70"
                            >
                              {order.quantity}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            className="font-normal"
                          >
                            {order.orderProducts.currentPrice}
                          </Typography>
                        </div>
                      </td>
                      {/*  */}
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            className="font-normal"
                          >
                            {order.orderDate}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            className="font-normal"
                          >
                            {order.user}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Tooltip content="Delete User">
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

  )
}
