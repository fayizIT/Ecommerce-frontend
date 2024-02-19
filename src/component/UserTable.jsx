const UserTable = ({ users, onDelete }) => {
  return (
    <table className="min-w-full border rounded overflow-hidden">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Email</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user._id} className="bg-gray-800 text-white">
              <td className="py-2 px-4 text-center">{user._id}</td>
              <td className="py-2 px-4 text-center">{user.name}</td>
              <td className="py-2 px-4 text-center">{user.email}</td>
              <td className="py-2 px-4 text-center">
              <button onClick={() => onDelete(user._id)} className="bg-red-500 text-white px-2 py-1 mx-1">
  Delete
</button>


              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UserTable;

