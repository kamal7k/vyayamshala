import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Main from './features/dashboard/Main';
// import Login from './features/auth/Login';
// import Register from './features/auth/Register';
// import ProfileMain from './features/user/ProfileMain';
import AdminRoute from './features/admin/AdminRoute';
import Dashboard from './features/admin/Dashboard';
import Users from './features/admin/admin-ui/Users';
import Trainers from './features/admin/admin-ui/Trainers';
import AddTrainer from './features/admin/admin-ui/AddTrainer';
import TrainerEdit from './features/admin/editform/TrainerEdit';
import Detail from './ui/Detail';


const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Main />,         
        },
        {
          path: 'details',
          element: <Detail/>
        },

        //admin Route
        {
          path: 'admin',
          element: <AdminRoute />,

        },

        {
          path: 'admin-dashboard',
          element: <Dashboard />
        },

        {
          path: 'users',
          element: <Users />
        },

        {
          path: 'trainers',
          element: <Trainers />
        },

        {
          path: 'add-trainer',
          element: <AddTrainer />
        },

        {
          path: 'trainer-edit/:id',
          element: <TrainerEdit />
        }




      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App