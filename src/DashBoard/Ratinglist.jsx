import React from 'react'
import {
    Card,
    Typography,
    CardBody,
    Tooltip,
  } from "@material-tailwind/react";
import Sidebar from './Shared/Sidebar';

const TABLE_HEAD = ["Product Name", "Rating Index", "Rating","DELETE"];
   
const TABLE_ROWS = [
  {
    product_name: "John Michael",
    rating_index: "200.00",
    
  },
  {
    product_name: "Alexa Liras",
    rating_index: "250.00",
   
  },
  {
    product_name: "Laurent Perrier",
    rating_index: "350.00",
    
  },
  {
    product_name: "Michael Levi",
    rating_index: "350.00",
    
  },
];


export default function Ratinglist() {
  return (
    <div className='flex'>
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
                ({ product_name, rating_index, quentity }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                    ? "p-2"
                    : "p-4 border-b border-blue-gray-50";
    
                    return (
                    <tr key={product_name}>
                        <td className={classes}>
                        <div className="flex items-center">
                            <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                                {product_name}
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
                              {rating_index}
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
                        
                        {/* <td className={classes}>
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
                        </td> */}
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
