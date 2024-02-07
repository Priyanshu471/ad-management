import React from "react";

const Admin: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white bg-black">
        {/* Sidebar content */}
      </div>
      {/* Main content */}
      <div className="w-3/4 bg-gray-100">{/* Main content */}</div>
    </div>
  );
};

export default Admin;
