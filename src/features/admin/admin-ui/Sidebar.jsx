import { Drawer, Typography } from "@material-tailwind/react";
import { SiSimpleanalytics } from "react-icons/si";
import { useNavigate } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const adminSidebarMenuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin-dashboard',
    icon: <RxDashboard />
  },
  {
    id: 'users',
    label: 'Users',
    path: '/users',
    icon: <BsCart4 />
  },
  {
    id: 'trainers',
    label: 'Trainers',
    path: '/trainers',
    icon: <IoCheckmarkCircleOutline />
  }
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map(item => (
        <div
          key={item.id}
          onClick={() => {
            navigate(item.path);
            setOpen(false);
          }}
          className="flex items-center gap-5 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground text-xl cursor-pointer"
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

const Sidebar = ({ open, setOpen }) => (
  <>
    {/* Sidebar always visible on large screens */}
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:h-full lg:bg-background">
      <div className="mb-2 flex flex-col items-center justify-between p-4">
        <div className="flex gap-5 mt-1 items-center">
          <SiSimpleanalytics size={23} />
          <Typography variant="h4" color="black">
            Admin Panel
          </Typography>
        </div>
        <MenuItems setOpen={setOpen} />
      </div>
    </div>

    {/* Sidebar for small screens (controlled by the button) */}
    <Drawer open={open} onClose={() => setOpen(false)}>
      <div className="mb-2 flex flex-col items-center justify-between p-4">
        <div className="flex gap-5 mt-5 items-center">
          <SiSimpleanalytics size={23} />
          <Typography variant="h4" color="black">
            Admin Panel
          </Typography>
        </div>
        <MenuItems setOpen={setOpen} />
      </div>
    </Drawer>
  </>
);

export default Sidebar;
