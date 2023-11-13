import React, { useEffect, useState } from 'react'
import {
  Card,
  Typography,
  CardBody,
  Tooltip,
} from "@material-tailwind/react";
import Sidebar from "./Shared/Sidebar";
import axios from 'axios';
import config from "../config.json";
import { Link, useNavigate } from 'react-router-dom';


const TABLE_HEAD = ["Name", "Email", "Phone Number", "Edite", "Delete", "Add Order"];

export default function Coustomers() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(config.getAllUsersApiUrl);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  //console.log(users);

  const deleteCoustomer = async (id) => {
    await axios.delete(`https://localhost:7184/api/User/admin/${id}`);
  }

  return (

    <div className="flex ">
      <Sidebar />
      <div className="items-center justify-center mt-20 ml-20 ">
        <Tooltip content="Add User">
          <button type="button" onClick={() => navigate("/addusernew")} className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-500 dark:text-purple-500 dark:hover:text-white dark:hover:bg-purple-600 dark:focus:ring-purple-900">Add User</button>
        </Tooltip>
        <Card className="rounded-md border border-blue-gray-200  border-2 border border-green-500 border-2">
          <CardBody >
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
                {users.map((users) => {
                  return (
                    
                    <tr key={users.id}>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {users.name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {users.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {users.phoneNumber}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Tooltip content="Edit User">
                          <Link type="button" to={`/updatecoustomer/${users.id}`} className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Update</Link>
                        </Tooltip>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Tooltip content="Edit User">
                          <button onClick={() => deleteCoustomer(users.id)}  type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                        </Tooltip>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Tooltip content="Add Urder">
                          <Link onClick={() => setShowMyModal(true)} to={`/addorderforuser/${users.id}`} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">Add Order</Link>
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
