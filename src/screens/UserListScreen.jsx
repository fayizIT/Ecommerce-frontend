import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllUsersQuery, useDeleteUserMutation } from '../slices/adminApiSlice';
import UserTable from '../component/UserTable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const { data: users, isError, error,refetch } = useGetAllUsersQuery();
  const [deleteUserApiCall] = useDeleteUserMutation(); // Add the delete mutation hook

  const handleDeleteUser = async (userId) => {
    console.log("Deleting user with ID:", userId);
    try {
      await deleteUserApiCall(userId);
      // Refresh the user list after deleting a user
      refetch();
      toast.success('User deleted successfully');
    } catch (err) {
      console.error(err);
      console.error(err.response?.data); // Log the full error response
      if (err?.status === 404) {
        toast.error('User not found');
      } else if (err?.status === 500) {
        toast.error('Internal Server Error');
      } else {
        toast.error(err.response?.data?.error || 'An unexpected error occurred');
      }
    }
  };
  
  
  

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">User List</h1>
      {isError ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <UserTable users={users} onDelete={handleDeleteUser} />
      )}
    </div>
  );
};

export default UserListScreen;
