import React, { useState } from 'react';
import Header from './admin-ui/Header';
import Sidebar from './admin-ui/Sidebar';

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className='flex min-h-screen w-full'>
      {/* Sidebar for both small and large screens */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />

      <div className='flex flex-1 flex-col'>
        {/* Header with button to toggle sidebar on small screens */}
        <Header setOpen={setOpenSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;
