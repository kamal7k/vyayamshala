import React from 'react';
import { useGetAllUsersQuery, useRemoveUserByIdMutation } from '../../auth/userApi';
import { toast } from 'react-toastify';
import { Button } from '@material-tailwind/react';

const Users = () => {
  // Fetch all users
  const { isLoading, data } = useGetAllUsersQuery();

  // Define the removeUser mutation hook at the top level
  const [removeUser, { isLoading: isDeleting }] = useRemoveUserByIdMutation();

  if (isLoading) return <p>Loading...</p>;

  // Delete function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        await removeUser({ id }).unwrap();
        toast.success("User removed successfully");
      } catch (error) {
        toast.error(`Error: ${error.data?.message || "Unable to delete user"}`);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">S.N.</th>
            <th className="px-4 py-2">Full Name</th><th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Submitted At</th><th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user, index) => (
            <tr key={user._id} className="border-b">
              <td className="px-4 py-2 text-center">{index + 1}</td>
              <td className="px-4 py-2 text-center">{user.fullname}</td><td className="px-4 py-2 text-center">{user.number}</td>
              <td className="px-4 py-2 text-center">{new Date(user.createdAt).toLocaleString()}</td>
              <td className="px-4 py-2 text-center">
                <Button onClick={() => handleDelete(user._id)} disabled={isDeleting}
                  color="red" size="md">
                  {isDeleting ? "Deleting..." : "Delete"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
