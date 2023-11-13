import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  CardBody,
  Tooltip,
} from "@material-tailwind/react";
import Sidebar from "./Shared/Sidebar";
import axios from "axios";
import config from "../config.json";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Name", "Phone Number", "Email", "Payment Histry"];

export function Transaction() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(config.getAllUsersApiUrl);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  console.log(users);


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
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {user.name}
                          </Typography>

                        </div>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.phoneNumber}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.email}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Tooltip content="Look Payment Histry">
                        <Link type="button" to={`paymenthistry/${user.id}`} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Payment Histry</Link>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>

  );
}