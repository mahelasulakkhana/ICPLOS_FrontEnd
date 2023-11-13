import React from "react";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useState } from 'react';
import axios from 'axios';

const TABLE_HEAD = ["Name", "Price", "Quentity", "Total", "Date", "Status"];


export default function History() {

  const [isPaid, setIsPaid] = useState('false');
  const [isAll, setIsAll] = useState('true');

  const handleIsPaidChange = (e) => {
    setIsPaid(e.target.value);
  };

  const handleIsAllChange = (e) => {
    setIsAll(e.target.value);
  };

  const generateURL = () => {
    const apiUrl = `https://localhost:7184/api/Order/user?isPaid=${isPaid}&isAll=${isAll}`;
    // Use this apiUrl to fetch data or perform other operations
    console.log(apiUrl); // Just for testing, replace with your API call
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <select value={isPaid} onChange={handleIsPaidChange} className="p-2 m-2 border-2 border border-green-500 rounded-lg">
          <option value="true">Paid</option>
          <option value="false">Not Paid</option>
        </select>

        <select value={isAll} onChange={handleIsAllChange} className="p-2 m-2 border-2 border border-green-500 rounded-lg">
          <option value="true">All Payment</option>
          <option value="false">Today Payment</option>
        </select>

        <Tooltip content="Delete Order items-center justify-center">
          <button type="button" onClick={generateURL} className="ml-[20px] mt-[8px] text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900">Go To Histry</button>
        </Tooltip>
      </div>

      <div className=" h-full w-full flex items-center justify-center mt-20 ">
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
              {/* <tbody>
                {TABLE_ROWS.map(
                  ({ name, price, quentity, total, edite, date }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-2"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center">

                            <div className="flex flex-col items-center justify-center">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>

                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              Rs. {price}
                            </Typography>

                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col items-center justify-center">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {quentity}
                            </Typography>

                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {total}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edite Order">
                            <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Edite</button>
                          </Tooltip>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Delete Order items-center justify-center">
                            <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody> */}
            </table>
          </CardBody>
        </Card>
      </div>
    </div>

  )
}


