import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users({ data, deleteUser, updateUser }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ idUsers: "", EMAIL: "", PASSWORD: "" });

  // Open modal and set the selected user
  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes
  const handleSave = () => {
    updateUser(selectedUser.idUsers, selectedUser.EMAIL, selectedUser.PASSWORD);
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-center mt-3 relative">
        <table className="border w-[600px] border-collapse">
          <thead>
            <tr className="bg-green-200 border">
              <th className="border-1">ID</th>
              <th className="border-1">EMAIL</th>
              <th className="border-1">PASSWORD</th>
              <th className="border-1">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr className="hover:bg-gray-100" key={d.idUsers}>
                <td className="text-center border p-1">{d.idUsers}</td>
                <td className="text-center border p-1">{d.EMAIL}</td>
                <td className="text-center border p-1">{d.PASSWORD}</td>
                <td className="text-center border p-1 flex justify-center gap-2">
                  <button
                    onClick={() => openModal(d)}
                    className="bg-yellow-300 rounded-md p-2"
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => deleteUser(d.idUsers)}
                    className="bg-red-300 rounded-md p-2"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tailwind Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-[300px]">
              <h2 className="text-lg font-bold mb-4">Update User</h2>
              <div className="mb-3">
                <input
                  type="text"
                  name="EMAIL"
                  value={selectedUser.EMAIL}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border p-2 w-full rounded mb-2"
                />
                <input
                  type="text"
                  name="PASSWORD"
                  value={selectedUser.PASSWORD}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border p-2 w-full rounded mb-4"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 px-4 py-2 rounded"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    SAVE CHANGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Link className="bg-pink-300 inline-block p-2 rounded ml-5 mt-3" to="/">
        BACK TO LOGIN
      </Link>
    </>
  );
}

export default Users;
