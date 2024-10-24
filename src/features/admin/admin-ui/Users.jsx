import React from 'react';
import { useGetAllUsersQuery } from '../../auth/userApi';




const Users = () => {
  const { isLoading, data } = useGetAllUsersQuery();

  if (isLoading) return <p>Loading...</p>;

  console.log(data)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="px-4 py-2 text-center">{user.fullname}</td>
              <td className="px-4 py-2 text-center">{user.number}</td>
              <td className="px-4 py-2 text-center">{new Date(user.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
