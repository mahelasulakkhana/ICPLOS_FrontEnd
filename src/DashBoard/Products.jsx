import React from "react";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import Sidebar from "./Shared/Sidebar";

 
const TABLE_HEAD = ["Name", "Discription", "Price", "Edite", "Delete"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    price: "Rs.100.00",
    discription: 'Chicken, Rice, Dhal, Carrot, Gotukola',

  },
  {
    name: "Alexa Liras",
    price: "Rs.200.00",
    discription: 'Chicken, Rice, Dhal, Carrot, Gotukola',

  },
  {
    name: "Laurent Perrier",
    price: "Rs.250.00",
    discription: 'Chicken, Rice, Dhal, Carrot, Gotukola',

  },
  {
    name: "Michael Levi",
    price: "Rs.350.00",
    discription: 'Chicken, Rice, Dhal, Carrot, Gotukola',

  },
];
  export default function Products() {
    return (
      <div className="flex">
      <Sidebar/>
      <div className="items-center justify-center p-10 mt-20 ml-20">
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
                ({ name, price, discription}, index) => {
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
                                className="font-normal"
                              >
                                {discription}
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
                                className="font-normal"
                              >
                                {price}
                              </Typography>  
                        </div>
                      </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Edite</button>
                        </Tooltip>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Delete User">
                          <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
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
    );
  }