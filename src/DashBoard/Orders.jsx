import React from 'react'
import {
    Card,
    Typography,
    CardBody,
    Chip,
    Tooltip,
  } from "@material-tailwind/react";
import Sidebar from "./Shared/Sidebar";
  
  const TABLE_HEAD = ["Name", "Price", "Quentity", "Total","Date", "Edite", "Delete"];
   
  const TABLE_ROWS = [
    {
      name: "John Michael",
      price: "200.00",
      quentity: "Manager",
      total: "1000.00",
      edite: true,
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      price: "250.00",
      quentity: "Programator",
      total: "2000.00",
      edite: false,
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      price: "350.00",
      quentity: "Executive",
      total: "2500.00",
      edite: false,
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      price: "350.00",
      quentity: "Programator",
      total: "2500.00",
      edite: true,
      date: "24/12/08",
    },
  ];
   
export default function Orders() {
  return (
    <div className="flex ">
      <Sidebar/>
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
                        <div className="flex flex-col">
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
                      <div className="flex items-center">
                        <div className="flex flex-col">
                    <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                           Rs. {price}
                          </Typography>
                          </div>
                          </div>
                          </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {quentity}
                        </Typography>
                      </div>
                    </td>
                    {/*  */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Rs.{total}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Edite</button>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Delete User">
                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
    </div>
    </div>
   
  )
}
