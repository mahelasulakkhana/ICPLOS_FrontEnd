import React from "react";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Tooltip,
} from "@material-tailwind/react";
import Sidebar from "./Shared/Sidebar";


 
const TABLE_HEAD = ["Name", "Price", "Quentity", "Price" ,"Date", "Edite", "Delete", "Send Email"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    price: "john@creative-tim.com",
    quentity: "Manager",
    price: "2000.00",
    edite: true,
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    price: "alexa@creative-tim.com",
    quentity: "Programator",
    price: "2000.00",
    edite: false,
    date: "23/04/18",
  },
];
 
export function Transaction() {
  return (
   
    <div className="flex ">
      <Sidebar/>
      <div className="items-center justify-center p-10 mt-20 ml-20 ">
    <Card className="rounded-md border border-blue-gray-200  border-2 border border-green-500 border-2">
    <label className='relative cursor-pointer p-4 '>
        <input type="text" placeholder="Input" className='h-10 w-150 px-6 text-2xl text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
        <span className='center items-center justify-center text-l text-black text-opacity-80  absolute left-5 top-5 px-1 transition duration-200 input-text'>User ID</span>
    </label>
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
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={edite ? "online" : "offline"}
                          color={edite ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {price}
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
                      <Tooltip content="Edit User">
                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Send Email">
                        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Email</button>
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