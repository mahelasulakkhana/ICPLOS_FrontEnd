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


 
const TABLE_HEAD = ["Name", "Price", "Quentity", "Edite", "Delete"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    price: "250.00",
    quentity: "2",
    total: "1000",
  
  },
  {
    name: "Alexa Liras",
    price: "350.00",
    quentity: "1",
    total: "1500",
    
  },

];
 
export function Cart() {

  // const [user, setUser] = useState();

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userData = localStorage.getItem("logUser")

  //   if(userData){
  //     setUser(JSON.parse(userData)?.user);
  //     console.log(JSON.parse(userData));
  //   }else{
  //     navigate("/login");
  //   }
    
  // }, [])

  // useEffect(() => {
  //   let config = {
  //     method: 'get',
  //     maxBodyLength: Infinity,
  //     url: 'https://localhost:7184/api/Order/{{OrderID}}',
  //     headers: { 
  //       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmF2aW5kdUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNjk5NTA2MzE2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTg0IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE4NCJ9.6GT31NRhmZYxjtm56Uxt9AV27BdQSYj9qfJpjh6cCCQ'
  //     }
  //   };
    
  //   axios.request(config)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, [user])

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
                    {/* <td className={classes}>
                      <div className="flex flex-col">
                    <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {total}
                        </Typography>
                        </div>
                        </td> */}
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
          </tbody>
        </table>
      </CardBody>
    </Card>
    </div>
    </div>
  );
}