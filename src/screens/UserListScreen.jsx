import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllUsersQuery, useDeleteUserMutation } from '../slices/adminApiSlice';
import UserTable from '../component/UserTable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-center">Currently no users found.</h1>;
    }

    return this.props.children;
  }
}

const UserListScreen = () => {
  const dispatch = useDispatch();
  const { data: users, isError, error, refetch } = useGetAllUsersQuery();
  const [deleteUserApiCall] = useDeleteUserMutation();

  const handleDeleteUser = async (userId) => {
    console.log("Deleting user with ID:", userId);
    try {
      await deleteUserApiCall(userId);
      // Refresh the user list after deleting a user
      refetch();
      toast.success('User deleted successfully');
    } catch (err) {
      console.error(err);
      console.error(err.response?.data);
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
    <ErrorBoundary>
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">User List</h1>
        {isError ? (
          <div className="text-red-500">{error}</div>
        ) : users && users.length > 0 ? (
          <UserTable users={users} onDelete={handleDeleteUser} />
        ) : (
          <h2 className="text-center">No users found</h2>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default UserListScreen;
