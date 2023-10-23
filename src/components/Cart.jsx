import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    // label: "All",
    value: "all",
  },
  {
    // label: "Monitored",
    value: "monitored",
  },
  {
    // label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Name", "Price", "Quentity", "Total", "Edite", "Delete"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    price: "john@creative-tim.com",
    quentity: "Manager",
    total: "Organization",
    edite: true,
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    price: "alexa@creative-tim.com",
    quentity: "Programator",
    total: "Developer",
    edite: false,
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    price: "laurent@creative-tim.com",
    quentity: "Executive",
    total: "Projects",
    edite: false,
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    price: "michael@creative-tim.com",
    quentity: "Programator",
    total: "Developer",
    edite: true,
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    price: "richard@creative-tim.com",
    quentity: "Manager",
    total: "Executive",
    edite: false,
    date: "04/10/21",
  },
];
 
export function Cart() {
  return (
    <Card className="rounded-md border border-blue-gray-200 ml-4 mr-4 mb-4 border-2">
      <CardHeader floated={false} shadow={false} className="rounded-md">
        {/* <div className="mb-8 items-center">
        </div> */}
        <div className=" flex-col items-center md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0 rounded-md">
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
                        {/* <Avatar src={img} alt={name} size="sm" /> */}
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {price}
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
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
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
  );
}